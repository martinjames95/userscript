// ==UserScript==
// @name           TLR Travel Bot
// @namespace      Jrim 
// @description    www.jrimsoftware.com
// @include        http://thelostrunes.com/game.php
// @include        http://www.thelostrunes.com/game.php
// ==/UserScript==

var _0xaa66=["\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x79\x70\x65","\x74\x65\x78\x74\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x7B\x20\x76\x61\x72\x20\x61\x74\x69\x6D\x65\x72\x5F\x63\x68\x65\x63\x6B\x20\x3D\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x28\x22\x61\x63\x74\x69\x6F\x6E\x74\x69\x6D\x65\x72\x22\x29\x2E\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x3B\x20\x73\x65\x6E\x64\x43\x68\x61\x74\x32\x28\x27\x6D\x69\x73\x63\x2E\x70\x68\x70\x3F\x6D\x6F\x64\x3D\x63\x68\x61\x74\x27\x2C\x20\x27\x6D\x73\x67\x3D\x2F\x62\x62\x62\x20\x2E\x27\x29\x3B\x20\x69\x66\x28\x61\x74\x69\x6D\x65\x72\x5F\x63\x68\x65\x63\x6B\x20\x21\x3D\x20\x22\x30\x2E\x30\x22\x29\x20\x7B\x20\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x20\x3D\x20\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x3B\x7D\x2C\x20\x31\x29\x3B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x65\x6C\x73\x65\x20\x7B\x20\x76\x61\x72\x20\x63\x75\x72\x72\x4C\x6F\x63\x20\x3D\x20\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x28\x22\x6C\x6F\x63\x63\x6F\x6F\x72\x64\x73\x22\x29\x2E\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x3B\x20\x63\x75\x72\x72\x4C\x6F\x63\x20\x3D\x20\x63\x75\x72\x72\x4C\x6F\x63\x2E\x73\x70\x6C\x69\x74\x28\x22\x2C\x22\x29\x3B\x20\x76\x61\x72\x20\x63\x75\x72\x72\x4C\x6F\x63\x58\x20\x3D\x20\x63\x75\x72\x72\x4C\x6F\x63\x5B\x30\x5D\x3B\x20\x76\x61\x72\x20\x63\x75\x72\x72\x4C\x6F\x63\x59\x20\x3D\x20\x63\x75\x72\x72\x4C\x6F\x63\x5B\x31\x5D\x3B\x20\x69\x66\x20\x28\x78\x20\x3D\x3D\x20\x22\x22\x29\x20\x7B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x69\x66\x20\x28\x79\x20\x3D\x3D\x20\x22\x22\x29\x20\x7B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x69\x66\x20\x28\x63\x75\x72\x72\x4C\x6F\x63\x58\x20\x21\x3D\x20\x78\x29\x20\x7B\x20\x76\x61\x72\x20\x58\x74\x65\x73\x74\x20\x3D\x20\x70\x61\x72\x73\x65\x46\x6C\x6F\x61\x74\x28\x78\x2D\x63\x75\x72\x72\x4C\x6F\x63\x58\x29\x3B\x20\x69\x66\x20\x28\x58\x74\x65\x73\x74\x20\x3C\x20\x30\x29\x20\x7B\x20\x67\x6F\x28\x34\x29\x3B\x20\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x20\x3D\x20\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x3B\x7D\x2C\x20\x31\x29\x3B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x65\x6C\x73\x65\x20\x69\x66\x20\x28\x58\x74\x65\x73\x74\x20\x3E\x20\x30\x29\x20\x7B\x20\x67\x6F\x28\x33\x29\x3B\x20\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x20\x3D\x20\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x3B\x7D\x2C\x20\x31\x29\x3B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x7D\x20\x69\x66\x20\x28\x63\x75\x72\x72\x4C\x6F\x63\x59\x20\x21\x3D\x20\x79\x29\x20\x7B\x20\x76\x61\x72\x20\x59\x74\x65\x73\x74\x20\x3D\x20\x70\x61\x72\x73\x65\x46\x6C\x6F\x61\x74\x28\x79\x2D\x63\x75\x72\x72\x4C\x6F\x63\x59\x29\x3B\x20\x69\x66\x20\x28\x59\x74\x65\x73\x74\x20\x3C\x20\x30\x29\x20\x7B\x20\x67\x6F\x28\x32\x29\x3B\x20\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x20\x3D\x20\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x3B\x7D\x2C\x20\x32\x35\x30\x29\x3B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x65\x6C\x73\x65\x20\x69\x66\x20\x28\x59\x74\x65\x73\x74\x20\x3E\x20\x30\x29\x20\x7B\x20\x67\x6F\x28\x31\x29\x3B\x20\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x20\x3D\x20\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x78\x2C\x79\x29\x3B\x7D\x2C\x20\x31\x29\x3B\x20\x72\x65\x74\x75\x72\x6E\x3B\x20\x7D\x20\x7D\x20\x7D\x20\x7D","\x6C\x65\x66\x74\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x3C\x74\x61\x62\x6C\x65\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x73\x70\x61\x63\x69\x6E\x67\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x70\x61\x64\x64\x69\x6E\x67\x3D\x22\x32\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x3E\x3C\x74\x72\x3E\x3C\x74\x64\x3E\x58\x3A\x20\x3C\x69\x6E\x70\x75\x74\x20\x69\x64\x3D\x22\x73\x63\x72\x69\x70\x74\x5F\x78\x6C\x6F\x63\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x31\x38\x70\x78\x3B\x22\x20\x2F\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E\x59\x3A\x20\x3C\x69\x6E\x70\x75\x74\x20\x69\x64\x3D\x22\x73\x63\x72\x69\x70\x74\x5F\x79\x6C\x6F\x63\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x31\x38\x70\x78\x3B\x22\x20\x2F\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x47\x6F\x22\x20\x6F\x6E\x43\x6C\x69\x63\x6B\x3D\x22\x6C\x61\x6E\x64\x57\x61\x6C\x6B\x65\x72\x53\x63\x72\x69\x70\x74\x28\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x28\x27\x73\x63\x72\x69\x70\x74\x5F\x78\x6C\x6F\x63\x27\x29\x2E\x76\x61\x6C\x75\x65\x2C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x28\x27\x73\x63\x72\x69\x70\x74\x5F\x79\x6C\x6F\x63\x27\x29\x2E\x76\x61\x6C\x75\x65\x29\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A\x32\x33\x70\x78\x3B\x22\x20\x2F\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x74\x6F\x70\x22\x20\x6F\x6E\x43\x6C\x69\x63\x6B\x3D\x22\x63\x6C\x65\x61\x72\x54\x69\x6D\x65\x6F\x75\x74\x28\x77\x61\x6C\x6B\x54\x69\x6D\x65\x6F\x75\x74\x29\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A\x32\x33\x70\x78\x3B\x22\x20\x2F\x3E\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E\x3C\x2F\x74\x61\x62\x6C\x65\x3E"];function addGlobalJS(_0x3c43x2){var _0x3c43x3,_0x3c43x4;_0x3c43x3=document[_0xaa66[1]](_0xaa66[0])[0];if(!_0x3c43x3){return ;} ;_0x3c43x4=document[_0xaa66[3]](_0xaa66[2]);_0x3c43x4[_0xaa66[4]]=_0xaa66[5];_0x3c43x4[_0xaa66[6]]=_0x3c43x2;_0x3c43x3[_0xaa66[7]](_0x3c43x4);} ;addGlobalJS(_0xaa66[8]);document[_0xaa66[10]](_0xaa66[9])[_0xaa66[6]]+=_0xaa66[11];