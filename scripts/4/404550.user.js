// ==UserScript==
// @name       WaniKani Part-of-Speech
// @namespace
// @version    1.3
// @description  Displays additional part of speech information on the vocab item page.
// @match      *://www.wanikani.com/*vocabulary/*
// @match      *://www.wanikani.com/review/session*
// @match      *://www.wanikani.com/lesson/session*
// @copyright  2014 jeshuam
// ==/UserScript==


$(function() {
    //
    // Generic mapping function. Will map the given key to the corresponding value in the
    // mapping. If the key is not inside the mapping, `key` will be returned.
    //
    function _map(key, mapping) {
        if (key in mapping)
            return mapping[key];
        return key;
    }

    //
    // Abbreviate some common expressions.
    //
    function GetShorthand(key) {
        return _map(key, {
            // POS expressions.
            "adjective (keiyoushi)": "い-adjective",
            "adjectival nouns or quasi-adjectives (keiyodoshi)": "な-adjective",
            "nouns which may take the genitive case particle `no'": "の-adjective",
            "adverb (fukushi)": "adverb",
            "noun (common) (futsuumeishi)": "noun",
            "Expressions (phrases, clauses, etc.)": "expression",
            "interjection (kandoushi)": "interjection",
            "adverbial noun (fukushitekimeishi)": "adverbial noun",
            "noun, used as a prefix": "noun (prefix)",
            "noun, used as a suffix": "noun (suffix)",
            "noun (temporal) (jisoumeishi)": "noun (temporal)",
            "noun or participle which takes the aux. verb suru": "する-verb",

            // Misc expressions.
            "word usually written using kanji alone": "usually written in kanji alone",
            "word usually written using kana alone": "usually written in kana alone",
            "polite (teineigo) language": "polite language",

            // Field expressions.
        });
    }

    //
    // Given a jQuery container, activate all tooltips within the container.
    //
    function ActivateTooltips(container) {
        if (container && container.tooltip) {
           container.find('span[rel="tooltip"]').tooltip();
        }
    }

    //
    // Given a piece of vocabulary and some speech data, return a section which contains
    // all formatted information.
    //
    function GetPartOfSpeechData(vocab_raw, data) {
        $('section#edict-info').detach();

        // If they aren't on a valid page (somehow), then return.
        if (!vocab_raw)
            return null;

        // If the vocab starts  with a tilde, remove it.
        if (vocab_raw.indexOf('〜') == 0) {
            vocab_raw = vocab_raw.substr(1);
        }

        // Extract the data from the array.
        var vocab = DATA[vocab_raw];

        // If we don't have data on this vocab, just stop.
        if (!vocab)
            return null;

        //
        // Display each sense of the word to the screen. This will display the:
        //    - Definition of the word (in English).
        //    - POS information about the definition.
        //    - Misc notes about the definition.
        //    - Whether the definition is genedered language (either 'male' or 'female').
        //    - Whether the definition is in a particular dialect.
        // 
        // Because of the way the dictionary is formed, POS attributes are inherited from
        // previous senses unless they are re-defined.
        //
        // If there are multiple glosses present, these will be presented one after another
        // with a semi-colon separating them.
        //
        var section = $('<section id="edict-info" />').append('<h2>Edict Definition</h2>').append('<ol />');
        var sense_list = section.find('ol');
        var parts_of_speech = [];
        $.each(vocab.senses, function(i, sense) {
            // List item to add the information to.
            var list_item = $('<li />');

            ///
            /// Add the main gloss information.
            ///
            var glosses = [];
            $.each(sense.glosses, function(i, gloss) {
                glosses.push(gloss.definition);
            });

            list_item.append('<p>' + glosses.join('; ') + '</p>');

            ///
            /// Add any subsequent information.
            ///
            var div = $('<div style="margin: -10px 10px">↳</div>')

            // Given a list of sense items, produce an array containing span element which represent
            // that element. The color is either `radical`, `kanji` or `vocabulary (for 
            // light blue, pink or purple).
            function ExtractSenseInformation(list, color) {
                var result = []
                $.each(list, function(_, item) {
                    result.push('<span class="highlight-' + color + ' ' + color + '-highlight" rel="tooltip" data-original-title="' + item + '">' + GetShorthand(item) + '</span>');
                });

                return result;
            }

            // Given a sense list extracted using ExtractSenseInformation, add it all to a div.
            function AddSenseInformationToDiv(sense_list, div) {
                if (sense_list.length > 0) {
                    div.append('&nbsp;').append(sense_list.join('&nbsp;'));
                }
            }

            //
            // Add the POS information.
            //
            if (sense.pos.length > 0) {
                parts_of_speech = ExtractSenseInformation(sense.pos, 'radical');
            }

            AddSenseInformationToDiv(parts_of_speech, div);

            //
            // Add the misc information.
            //
            AddSenseInformationToDiv(ExtractSenseInformation(sense.misc, 'kanji'), div);

            //
            // Add the 'field' information (e.g. 'computer terminology', 'linguistic term' etc.).
            //
            AddSenseInformationToDiv(ExtractSenseInformation(sense.field, 'kanji'), div);

            // Save the other information div.
            list_item.append(div);

            // Save the list item to the section list.
            sense_list.append(list_item);
        });

        // Save the section.
        return section;
    }

    // Switch based on the content of the URL.
    var url = document.URL;

    // Process the vocabulary page.
    if (url.indexOf('vocabulary') != -1) {
        var section = GetPartOfSpeechData($('header span.vocabulary-icon span').text().trim(), DATA);
        if (section) {
            $('section#information').after(section);
            ActivateTooltips(section);
        }
    }

    // Process the review page.
    else if (url.indexOf('review/session') != -1) {
        // Display the information when the current item changes. Don't do this if they are
        // supposed to enter the reading.
        $.jStorage.listenKeyChange('currentItem', function(key) {
            var section = GetPartOfSpeechData($.jStorage.get(key).voc, DATA);
            if (section && $('#answer-form input').attr('lang') != 'ja') {
                $('div#item-info').prepend(section.append('<br />'));
            }
        });

        // If the 'all-info' button is pressed, then display it.
        $('div#all-info').on('click', function() {
            var section = GetPartOfSpeechData($.jStorage.get('currentItem').voc, DATA);
            if (section) {
                $('div#item-info').prepend(section.append('<br />'));
            }
        });
    }

    // Process the lesson page.
    else if (url.indexOf('lesson/session') != -1) {
        $.jStorage.listenKeyChange('l/currentLesson', function(key) {
            var section = GetPartOfSpeechData($.jStorage.get(key).voc, DATA);
            if (section) {
                $('div#supplement-voc-meaning').append(section.prepend('<br />'));
            }
        });
    }
});