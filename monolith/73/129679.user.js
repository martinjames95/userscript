// ==UserScript==
// @name           iMobsters Mob Auto Inviter
// @namespace      ePi
// @description    Invites a whole bunch of people to your clan
// @include        http://im.storm8.com/group.php*
// ==/UserScript==
var numClick = GM_getValue('autoclicknum', 0);
var codes = [ 'DS75S8' , 
    'G5PD34' , 
    '5NDAQQ' , 
    'ABKF3X' , 
    'PSJYAU' , 
    'N4KPXX' , 
    'Q2X288' , 
    'QM7G5M' , 
    'ADDADD' , 
    'KBEWSY' , 
    'W2Y7S3' , 
    'HNTMKG' , 
    'HKJTJP' , 
    '7QYQDU' , 
    '45GJEP' , 
    'FNS827' , 
    '5AJGNY' , 
    'YA4JGN' , 
    'Q42MJ4' , 
    '9MEDEP' , 
    'UJHEYG' , 
    'PETWQH' , 
    'XACE4W' , 
    'PCWUW9' , 
    '3HRR3W' , 
    '3HRR3Q' , 
    'N7K6DM' , 
    'F3GUTW' , 
    '9RXYK3' , 
    'DY27GD' , 
    '7WJR9J' , 
    'NRHD9G' , 
    'D5GM43' , 
    'WBMGBJ' , 
    'GY9ASC' , 
    '7JB9A5' , 
    'QSVE53' , 
    'WP64BY' , 
    '4KC4D8' , 
    'EYPWGV' , 
    '8T6P7U' , 
    'G3T6G3' , 
    'XWN9AW' , 
    'B2HE89' , 
    'Q8S76P' , 
    'NMRS2P' , 
    'SN49VD' , 
    'U64GY5' , 
    'W6FR37' , 
    'XE44WE' , 
    '9XY5WJ' , 
    'T6GA6U' , 
    'X2XX3N' , 
    'KU6X3P' , 
    'MUKPEH' , 
    'U3XTRV' , 
    'WNUGE7' , 
    'D7V9Q9' , 
    '9S479V' , 
    'RQD5S3' , 
    '6N5BTK' , 
    'W4JMJP' , 
    '4Y4A63' , 
    'U4SRAS' , 
    'JRQEXX' , 
    'N22TA8' , 
    '4FQJTN' , 
    '4K8WSC' , 
    '6WRV43' , 
    'RC73FB' , 
    'SUU98U' , 
    '8TR6UR' , 
    'XWDTA9' , 
    'P4D6HY' , 
    '4AXPMJ' , 
    'HDWGN7' , 
    '8B6U3X' , 
    'VQ2C33' , 
    'DMWXC4' , 
    'X95NTD' , 
    'S8SHXR' , 
    '7MRF7V' , 
    '4QCWMN' , 
    'RA69PX' , 
    'D8FFG8' , 
    'JHVPY9' , 
    '3BDW2B' , 
    'N925XY' , 
    'XVJ3NH' , 
    'B9V4U2' , 
    'HVPJHK' , 
    'SR77YS' , 
    '5C2T6T' , 
    '83NFQ3' , 
    '9GPE95' , 
    'WA54WK' , 
    'XEBAHQ' , 
    '3KTW9J' , 
    'JB9NDS' , 
    'QPD2YJ' , 
    '864UQQ' , 
    'BUA82T' , 
    'QU8PMM' , 
    '7PB2KF' , 
    'DCUK9B' , 
    'QTFB6C' , 
    'KAV36R' , 
    'Q6CXBJ' , 
    'JMEEB3' , 
    '4RH8R8' , 
    'HMJRUK' , 
    'XAN2A6' , 
    'GSE35G' , 
    'U4KNNK' , 
    'PE8V6S' , 
    '77B4SW' , 
    'ANTX3K' , 
    'M49J4K' , 
    'P64XGF' , 
    'CNUTAP' , 
    'DUGN5M' , 
    'JB9D62' , 
    'EX2C8F' , 
    '6TT7BE' , 
    'UR2GFR' , 
    '5QWNMV' , 
    'N4QDCY' , 
    'EMDYRV' , 
    'T5C7TE' , 
    'XT7GJX' , 
    'QFN3V7' , 
    'MU6X6K' , 
    '725ASQ' , 
    '88WHV3' , 
    'QGMTUM' , 
    'MPDVDP' , 
    'F372MR' , 
    'A3JYYU' , 
    'UKF7TK' , 
    'N9NRG3' , 
    '3NSVPY' , 
    '4T86UB' , 
    'VDH8JC' , 
    'QW33RM' , 
    'FKJ3TF' , 
    'GNMAUD' , 
    'E7UUUK' , 
    'VKCXCM' , 
    'N6RBG3' , 
    '4XKTB4' , 
    'UD6Q38' , 
    'UA43PB' , 
    'S3W8YQ' , 
    'UYXVTB' , 
    '2FAXTH' , 
    'U2VT39' , 
    '7X4XHC' , 
    'P6T7C2' , 
    '54NP9J' , 
    '2W5BKY' , 
    '4786PV' , 
    'C8G3RB' , 
    'QCQY4U' , 
    '59DE2D' , 
    'JBJRC9' , 
    'TD7C4T' , 
    '6E7KB6' , 
    'QEX8VX' , 
    'FTNAAW' , 
    'CSKVPT' , 
    '8N9E87' , 
    'BPSVQT' , 
    '728EJX' , 
    'FGUPKA' , 
    'JTVHR4' , 
    '2UJ9UG' , 
    '66F4EW' , 
    'FW7MVV' , 
    'XK7BES' , 
    '64VUHX' , 
    'DGNNWA' , 
    'DNMQ66' , 
    'G4K7HR' , 
    'KCRJS6' , 
    'G3VCCJ' , 
    '3FAKQD' , 
    'WRXEQV' , 
    'N9UVXU' , 
    '4YJ7E5' , 
    '8QTU6B' , 
    'DW24VV' , 
    'PY9T7F' , 
    'FJRVDJ' , 
    'YWFTKJ' , 
    'WACNAQ' , 
    'SHX9GG' , 
    'WTWKCN' , 
    'F9XEQ4' , 
    'MR2VQ8' , 
    'WUTXHP' , 
    '6N2M5G' , 
    'K9W4XQ' , 
    'RKU8B6' , 
    'SC6NFX' , 
    '8RX2QU' , 
    'EBDMMH' , 
    'B45GHD' , 
    'HHDGDG' , 
    'Q665PD' , 
    '9QUFDT' , 
    'MNJE8A' , 
    'P3XJGB' , 
    '8SQ5Q9' , 
    'CDPGVJ' , 
    'MHDTJ3' , 
    'AMUYWD' , 
    'F468FY' , 
    'GKT6CT' , 
    '2BFJ97' , 
    'QHXNFD' , 
    'CPQB3J' , 
    'GAFSTM' , 
    '6JKTB7' , 
    'UKK59H' , 
    '53M6WR' , 
    '8FTQ4K' , 
    'B7PJBS' , 
    'SKYAT6' , 
    '6NB5PX' , 
    '2RRV4P' , 
    'N8BY44' , 
    'RWPJ38' , 
    '5RQPYT' , 
    'QC4BFV' , 
    '32M4FR' , 
    'RHFC2P' , 
    'VHB2BA' , 
    '6WDRVG' , 
    'YCSKUR' , 
    '99YSB7' , 
    'K9DHXM' , 
    '2U6KMY' , 
    'PSUC58' , 
    'WFTV5X' , 
    'H3T7FN' , 
    'H77KR3' , 
    'HTJGP8' , 
    'G8CFFJ' , 
    '8W5W97' , 
    '8P3H6T' , 
    'RPVDEF' , 
    'KV7SAV' , 
    'P2YXMD' , 
    'Q3GRVW' , 
    'DXVDQ6' , 
    'NTBYCX' , 
    'FARVRJ' , 
    '6DRBHY' , 
    '8AWVRS' , 
    'CHH6SR' , 
    'TU9KFE' , 
    'CAKUYD' , 
    'KCMJ7Q' , 
    'FN6VDH' , 
    '8JWMGF' , 
    'W79W3G' , 
    '4FUEXM' , 
    'NR3DA9' , 
    '7VAUAM' , 
    'MS7Q53' , 
    'BTYQ4G' , 
    'D7RVPM' , 
    'EW9GJ8' , 
    'TKUDKQ' , 
    '7USXYA' , 
    '9MMPEB' , 
    'F6GRHM' , 
    '9YDSW2' , 
    'PB4SSA' , 
    'UWMK3J' , 
    'WMG33P' , 
    'KT4S54' , 
    'QTN972' , 
    'QVFAQC' , 
    'J34VFN' , 
    'K28TXV' , 
    '38KNYP' , 
    'VSQWJ6' , 
    '7VMBAU' , 
    'JEKVQA' , 
    'DDM5RQ' , 
    '2HHPAA' , 
    'YMJJHV' , 
    '9E69GW' , 
    '9GGV9U' , 
    'DUGNM5' , 
    'FTSAAU' , 
    'HP727D' , 
    'XDSTAF' , 
    'WS7CV5' , 
    '8W8FBN' , 
    'UVSQFB' , 
    'QC8UPS' , 
    'R8JX95' , 
    'BBP6G4' , 
    'MDYTEA' , 
    'Y68WSS' , 
    'WW8W3P' , 
    '6UW9BQ' , 
    'VHAJNX' , 
    'NBP3X8' , 
    'VVF3A8' , 
    'QA6DCW' , 
    'R2MRRX' , 
    '6P2XCS' , 
    'HSV7DG' , 
    'WDHU93' , 
    '88G957' , 
    'N99CV5' , 
    '9A7BVM' , 
    'VS5VQS' , 
    'DC9GPG' , 
    'P4AKBM' , 
    'F5KFK5' , 
    'DVDYA5' , 
    'N54DAT' , 
    '8DEVB6' , 
    'HJEQSD' , 
    '29XMC3' , 
    '69NGAG' , 
    'GGBNU7' , 
    'U4PJUQ' , 
    '9C5JAC' , 
    'JBR3MM' , 
    'FGXEUX' , 
    'VHCFPD' , 
    '5YSWAQ' , 
    '8PMHD9' , 
    '7NK7YX' , 
    'HUCDFJ' , 
    'F2E7JX' , 
    'VDTQTB' , 
    '8W4DP5' , 
    'FP4M9U' , 
    'S8E6FE' , 
    'UGSYBT' , 
    'TW2XDH' , 
    'BHU9TH' , 
    '3QK2BF' , 
    'BF474J' , 
    'TC7MM7' , 
    'HAK96N' , 
    'RXSY59' , 
    '3KUNXA' , 
    '3KUNXA' , 
    'YQGJRT' , 
    '2U7QSG' , 
    'XNWHPX' , 
    'QBQ625' , 
    'QFUBPN' , 
    '4EQCT2' , 
    '2J5XAB' , 
    'YDC8E8' , 
    '3DSBUQ' , 
    'SP73HW' , 
    'TNQ236' , 
    'RTUN95' , 
    'C4PTAX' , 
    'QTXQAK' , 
    'BGXEUC' , 
    'Q6E85G' , 
    'SF3J9N' , 
    'JC9U3Y' , 
    'VWFGRN' , 
    '4F8UKU' , 
    '3KTVXB' , 
    'QTSY63' , 
    'DHV9AV' , 
    'PAFUKN' , 
    '659T3G' , 
    'RBVPBD' , 
    'R2K3QN' , 
    '97XSB2' , 
    'KTURET' , 
    'UK5DJG' , 
    'U3GPR7' , 
    '3WE9PD' , 
    'R85Q59' , 
    '8C26JT' , 
    'EXB99S' , 
    'B45MP5' , 
    'MXB8Q6' , 
    'XUA7ND' , 
    'K947XS' , 
    'MUDNRW' , 
    'HRHP5W' , 
    'GKJ7QC' , 
    'PQF3A4' , 
    'T4FGDV' , 
    '3HTP4Y' , 
    '8J9RB4' , 
    'R5FSCE' , 
    '32C5HV' , 
    'Y57D2F' , 
    '248DEU' , 
    'T2WYPT' , 
    'XKQ9HE' , 
    'Y2YBWP' , 
    'QM8HWT' , 
    'TUJN64' , 
    'YGW4GQ' , 
    'WMKSJS' , 
    'YGRT6H' , 
    'S7K4FN' , 
    'KRVDXU' , 
    'P4AD6Q' , 
    'E9ERSR' , 
    'PC7YDK' , 
    'UJFG62' , 
    'V4NKUP' , 
    '3AVSFQ' , 
    'QCHPC5' , 
    'NBDEJ8' , 
    'JF7VR3' , 
    '8CQ2DQ' , 
    '2TNEPX' , 
    '85HFW9' , 
    'PSUWD8' , 
    'W4E2NS' , 
    '77QY73' , 
    'HVGK57' , 
    'XAABNA' , 
    '89YQ28' , 
    '36S85A' , 
    '2PN6V2' , 
    'UWE5DX' , 
    'K4DHJY' , 
    'JYAFR5' , 
    'QM6K4K' , 
    'BDCE95' , 
    'SN2J47' , 
    'CTPDJG' , 
    'MW377M' , 
    '4M9KYW' , 
    'BVQPF8' , 
    'HKC9TD' , 
    'BDRYRJ' , 
    '65PYQS' , 
    'NM5MW2' , 
    'QJTSF8' , 
    'B54DBE' , 
    'KVSS8W' , 
    'QBV3X4' , 
    'RY2CW4' , 
    'PK96PV' , 
    'PBYPFW' , 
    'PPUUF5' , 
    'W3K4XA' , 
    '3BDGNY' , 
    'Q83PFP' , 
    '6WEF8Y' , 
    '3UUBKN' , 
    'KR4KM5' , 
    '2YBAKN' , 
    'XH3RKE' , 
    'G8PKQF' , 
    'RSSDYY' , 
    'Q7PMNU' , 
    'RK5Q7X' , 
    'UQC9RS' , 
    'FUC4SW' , 
    'TPC9TJ' , 
    'A3AUR7' , 
    'Q6Q8WE' , 
    '9FBE55' , 
    'WMDF78' , 
    'PCNVNU' , 
    'T88Y2D' , 
    'UNQSHY' , 
    '34GF5X' , 
    'DWRV4U' , 
    'C6V5EP' , 
    '3M4765' , 
    'HNGFFQ' , 
    'MP64BY' , 
    'MBQAGD' , 
    'DNHFNN' , 
    'FNK882' , 
    '88PGM7' , 
    'AJV84B' , 
    '4VMBT9' , 
    'DQD9E3' , 
    'QW8BMP' , 
    'R585M7' , 
    'DP9BN6' , 
    '2DU2T7' , 
    'J4GSTN' , 
    'EXAN73' , 
    '45AT5D' , 
    '7EC83A' , 
    'WVHWNB' , 
    'JCQE4D' , 
    'U3PCPF' , 
    '8STHPS' , 
    'H3RAU7' , 
    '95AQ62' , 
    'AA69NA' , 
    '86CXXX' , 
    '8SVGA4' , 
    'U4SH8D' , 
    'PCUWNX' , 
    'U7DXH6' , 
    'J6GASH' , 
    '9VU79G' , 
    'KGNAVE' , 
    'SXKKMS' , 
    'GF94TU' , 
    'GSSC3S' , 
    'PRB8DN' , 
    'YD2CG7' , 
    'CUS24R' , 
    'BWG8TN' , 
    'SDJFH6' , 
    'RMBXUJ' , 
    'BFMSRK' , 
    'SXXQUE' , 
    'QS59HK' , 
    '9JYU5J' , 
    'VNC7K4' , 
    'FGXT9V' , 
    'YESB7G' , 
    'VDYF73' , 
    'RQF6G7' , 
    'NT5Q36' , 
    'CYBY5V' , 
    'NTQ536' , 
    'G2W5S6' , 
    'DRVUN2' , 
    'SD9R8Y' , 
    '6GWE32' , 
    '9YNDBX' , 
    'PDPPTC' , 
    '42CX4A' , 
    'R877YN' , 
    'X9H56C' , 
    '852DGD' , 
    'CK9V43' , 
    'KHU22B' , 
    'MPWD67' , 
    'TQDTPG' , 
    'Y8WSWN' , 
    'FH2DMW' , 
    'CMHEWC' , 
    '6P7U5Q' , 
    '43TQCY' , 
    'NJP2AV' , 
    'YXUGQU' , 
    'C2VQQC' , 
    'QGN6CR' , 
    'E996D3' , 
    'AMSXBV' , 
    'WERAJU' , 
    'XGPPW8' , 
    'HE5GMV' , 
    '67XXUA' , 
    'J4K5XU' , 
    'XCYV7A' , 
    '9BK8YK' , 
    'VPXXBR' , 
    'U7S7YQ' , 
    'XG79AW' , 
    '6FE3PW' , 
    'GBMFJ2' , 
    'UAHVMR' , 
    'T5XBTT' , 
    'HHB2CX' , 
    'HHB2CM' , 
    '6QD2N4' , 
    '83DGAN' , 
    '3WDNDC' , 
    'RBJU8B' , 
    'YADY35' , 
    'KPHW9W' , 
    '3YKM9D' , 
    '9CDBV7' , 
    'XQRBXV' , 
    'P4ADP5' , 
    'NRWD89' , 
    'HBST2N' , 
    '76SM8Q' , 
    'GMP42K' , 
    'XG98BN' , 
    'BMKAN6' , 
    '5G55BW' , 
    '4DDJ29' , 
    '34T5NH' , 
    'S77WRS' , 
    'GBYHD9' , 
    'HR4VPD' , 
    'FNVWG8' , 
    'KFSG6K' , 
    'FT6Y8D' , 
    'T9KVPD' , 
    '5FQMYH' , 
    'XCKM6C' , 
    'S57SBK' , 
    'BD45R3' , 
    'SBRGKN' , 
    'QWCJAN' , 
    '372U69' , 
    'BXJ7T3' , 
    'CTWBB4' , 
    'ER3JB3' , 
    '4UEBDF' , 
    '6V5YRT' , 
    'FURCFY' , 
    'AGQYGB' , 
    'H42M9H' , 
    'DAJ8T6' , 
    'W38RHM' , 
    'BDJXKQ' , 
    'S6QCW5' , 
    'PGFKG3' , 
    '5BCT7Y' , 
    'NYM5TA' , 
    'P3CTP3' , 
    '3EM6NB' , 
    'DCEYMG' , 
    'JQV8MB' , 
    'JTWX92' , 
    'MRVPDV' , 
    'SR6HU2' , 
    '32QTG5' , 
    'SE28M8' , 
    'Q5W2CW' , 
    'FJVATT' , 
    '8VV42B' , 
    '9HXRCF' , 
    'C7DK9M' , 
    'DX7H49' , 
    'G6DV4N' , 
    'SWR6SS' , 
    'KJDAP6' , 
    'Y67VQY' , 
    'RE44BS' , 
    'FQT47W' , 
    'MK6TYF' , 
    'KKJJ8B' , 
    'XDTGH7' , 
    '8FUEFE' , 
    '3USVUX' , 
    'D28YPW' , 
    'PHEFTP' , 
    'KXM32K' , 
    '2N8DC3' , 
    'J7HPQU' , 
    '5QPDP4' , 
    'V7D634' , 
    '74SPMC' , 
    '6W53TV' , 
    'HP5PBM' , 
    '9TGQUN' , 
    '4G6NDT' , 
    'JYDKDN' , 
    'GRFP82' , 
    '2S3N2R' , 
    'DXUYWA' , 
    'V3PN92' , 
    '5QDB9F' , 
    '7KKHS6' , 
    '6YESBD' , 
    'U2WUDB' , 
    '3Y6CCE' , 
    'KDF7A7' , 
    'B8DDR7' , 
    '5B2S4F' , 
    'SCDCW5' , 
    'TTDJTE' , 
    'RY9V6R' , 
    'WYJ274' , 
    '8YK6F5' , 
    '5BMFMR' , 
    'VGY46U' , 
    'QBXM4N' , 
    'XTG6XA' , 
    'YNWURX' , 
    '7WWVE2' , 
    'DVBB3K' , 
    'S2VXR6' , 
    'DX8PR3' , 
    'HUDG6T' , 
    '5P6KH9' , 
    'DQEQQ8' , 
    'TSHQFG' , 
    '37QUM3' , 
    'J9JNG3' , 
    'BMGB2K' , 
    'U6XDS7' , 
    'DK6CYC' , 
    'U23K3G' , 
    'C7DCPH' , 
    'BJ88QU' , 
    'BWWW8E' , 
    'NSM2DS' , 
    'P89TSM' , 
    'HA5WB2' , 
    'TEGU5U' , 
    '3K8KFK' , 
    'YQMG7D' , 
    'AQR3EA' , 
    'JWTJJ5' , 
    'X44EGB' , 
    'QJJ9W6' , 
    'QJJ9WB' , 
    'P49R7Q' , 
    'KTNC3N' , 
    'RVD6RQ' , 
    '7JSWX3' , 
    'EU269D' , 
    '29HHJD' , 
    'FUPGFP' , 
    'RW5GTA' , 
    'EHXK48' , 
    '3GY3UK' , 
    '46NP5P' , 
    'HGAQET' , 
    'MRECAM' , 
    '9P8X68' , 
    'BG2TQH' , 
    'V27PBY' , 
    'GEQNP3' , 
    'BSUR9Y' , 
    'VNQ9VT' , 
    'QXYAFB' , 
    '26QSY5' , 
    'TVSCKP' , 
    'G9KCK4' , 
    'SYTJT3' , 
    'HNGRP7' , 
    'PNGAPT' , 
    '7U5JH5' , 
    '48FAC3' , 
    'J29RW7' , 
    'BNE6JD' , 
    'JCXDM3' , 
    '384W76' , 
    'KRJA3J' , 
    '5D94F8' , 
    'QBXFEB' , 
    'Y8RA5A' , 
    'YDACV7' , 
    'HA4SP9' , 
    'DUUMC4' , 
    '39RDW5' , 
    'WRDQEF' , 
    'DT8WCX' , 
    'BANMKP' , 
    '99CVY3' , 
    '3SSJSR' , 
    'XNY36Q' , 
    'FHSHYD' , 
    'EK3DRG' , 
    'K82KRP' , 
    '5XCP6G' , 
    'DMAKAU' , 
    'KTEH7Q' , 
    '4EAEN6' , 
    'NMEFHE' , 
    'QRMYDH' , 
    'GFTS9G' , 
    'WQQSWJ' , 
    'XEBCBT' , 
    'VHM8C2' , 
    'Q4SMKD' , 
    'A5J9PB' , 
    '6CSVT7' , 
    'DKPT48' , 
    'UJ44X8' , 
    'JUHUQX' , 
    'DKFE7A' , 
    'U2662G' , 
    '5WJT99' , 
    'EPCSCD' , 
    'BYFT2V' , 
    'G543XF' , 
    'EVDAT7' , 
    '45S5UP' , 
    'VANXQR' , 
    'QFSCD8' , 
    '9NFKH9' , 
    '5D7FY8' , 
    '884Q5D' , 
    'H7GH6P' , 
    'BWWE8E' , 
    'R4PJX4' , 
    '6JNJNF' , 
    '2NPFSX' , 
    'S95N76' , 
    'PU4H9M' , 
    '2ABGBM' , 
    'RRBCAC' , 
    'KDJTJ9' , 
    '9MECPR' , 
    'JPAFUN' , 
    '6BT5FN' , 
    'PWGD7A' , 
    'RWC2JR' , 
    'WT8NGA' , 
    'ASWAFQ' , 
    'FER7UU' , 
    '5USQ3W' , 
    'J5V368' , 
    'H2BPT3' , 
    'W8JX57' , 
    'W96NUQ' , 
    'EHHXT5' , 
    '2JARSW' , 
    'AWMFT6' , 
    '6KAT4N' , 
    'ERFEJ5' , 
    '7TRJ3X' , 
    'JJFTJG' , 
    'TX7MM7' , 
    'XRNSVJ' , 
    '3H43AH' , 
    'P9RPPF' , 
    'FCP5QR' , 
    'H69NQ5' , 
    'NFHQ26' , 
    'CYGYAC' , 
    'H6WRPF' , 
    'F3HQM9' , 
    'KYJYTV' , 
    '6Y93RW' , 
    'XBRHFA' , 
    '5HY59J' , 
    'S7BJDG' , 
    '7HVNKN' , 
    'FA8G5D' , 
    '5XJYQN' , 
    'JAADE8' , 
    'CGD8BD' , 
    '4BU5DY' , 
    'QSX4DR' , 
    'VKMC5T' , 
    'M4YRK5' , 
    '35QC2S' , 
    'VX3G7S' , 
    'JWRK8A' , 
    '6S9JFN' , 
    'PD4UFG' , 
    'Q45UXS' , 
    'WMRDW4' , 
    '23WHCR' , 
    'Q45USX' , 
    '4Y5WPF' , 
    'VNPPRG' , 
    '6XKNY5' , 
    'EHPG9X' , 
    'QRKU6N' , 
    '5GY4RS' , 
    'SCHH3X' , 
    'K85WCY' , 
    '6RDHMH' , 
    'DCM3HX' , 
    '2G36JM' , 
    'FHFATG' , 
    '97RCMT' , 
    'NKV7V5' , 
    'B64DU6' , 
    '4EKBDG' , 
    'KBVH85' , 
    '3C2SKH' , 
    'GBPAP8' , 
    'X5VCMX' , 
    'M8CBS7' , 
    'VWK28M' , 
    '3SR2SA' , 
    'GGWSAS' , 
    'T2Q8YD' , 
    '6JWRDC' , 
    '3E2KYA' , 
    'XTR97Y' , 
    'J2XFY8' , 
    '2RCHNY' , 
    'PRB8DM' , 
    'C38XPW' , 
    'HR4UCQ' , 
    '7GGUQX' , 
    'CUWDRA' , 
    '768EPM' , 
    '4AA5AC' , 
    'X5PY5K' , 
    'SSMJDE' , 
    'P2C92C' , 
    '9VU5PM' , 
    'CDMSS3' , 
    '5WQSWG' , 
    'C588S2' , 
    'RT49Q5' , 
    'YPFRKY' , 
    'TQF425' , 
    'B75HD7' , 
    '3Y35A2' , 
    'AT44EX' , 
    'U9R7VN' , 
    'W6TQA6' , 
    'J3M9NP' , 
    'X2JFKU' , 
    'M6BGDT' , 
    'EPKG24' , 
    'G2FRT5' , 
    'GKT8Q3' , 
    'QUDGFE' , 
    '9UASVQ' , 
    '5K874H' , 
    'D87HB3' , 
    'C57GRU' , 
    'NQ2F8N' , 
    '24KA88' , 
    'CBD8BD' , 
    '7Y6NXY' , 
    'EMEWCR' , 
    'SXJD24' , 
    '2E9J9K' , 
    'NKK9C4' , 
    'C8D6BR' , 
    'TGRM7Q' , 
    'YC56FE' , 
    'FVW2HU' , 
    '8NWXM3' , 
    'XTRASQ' , 
    '7KFAXS' , 
    '33DX3F' , 
    'SQQNFT' , 
    'XUHNES' , 
    'T8JE7V' , 
    'DA4KJU' , 
    'HKF9V7' , 
    'WX4F8Q' , 
    'ETBXXS' , 
    'SHDRKK' , 
    '59WRPB' , 
    '53ME6D' , 
    '9QKXVV' , 
    'ABF3NV' , 
    'XNP8NQ' , 
    'CG6FRB' , 
    'NJ63EK' , 
    'CDB4K6' , 
    'YXAR4H' , 
    '8HF6DR' , 
    'YUFKDA' , 
    '36YUJD' , 
    'CHA46G' , 
    'QSHDVE' , 
    'QTB63V' , 
    '5KSPWM' , 
    'AN4AU4' , 
    'VE2UEN' , 
    'US2XST' , 
    'PEPK2J' , 
    'ACD48G' , 
    'TGYNNA' , 
    'K63HAB' , 
    'B8C9UE' , 
    'WHV54F' , 
    'QGFRST' , 
    'D6V9R5' , 
    'JDR9F5' , 
    '5JS2K6' , 
    'HRXXQE' , 
    'TFRH6G' , 
    'GD6HRJ' , 
    'SWK5E4' , 
    'TXWCSV' , 
    'QBV52B' , 
    'VTHBPM' , 
    'GBCQJ6' , 
    'EU69VS' , 
    '2RND4X' , 
    '75SMNH' , 
    'MBFA49' , 
    'NSBMME' , 
    'PUFH4E' , 
    '2MMCMF' , 
    '2MMCMG' , 
    'N3HA7B' , 
    'FBSRAG' , 
    'G6TTYX' , 
    '9EHKA7' , 
    'JFPB27' , 
    'M6JXTW' , 
    '4KVPSH' , 
    'S39W24' , 
    'NJWHCF' , 
    '7FM6WW' , 
    'C89E46' , 
    '5N7CN4' , 
    '3KYY7F' , 
    'EHEMNS' , 
    'CDXGPQ' , 
    'M2EKUC' , 
    'WWFYCQ' , 
    'DG5VA9' , 
    'VEE7Y5' , 
    'BB98EG' , 
    'MX96EY' , 
    'DX8ARU' , 
    'HT6FX3' , 
    'EV24WA' , 
    'Q4M4KQ' , 
    'BP9QT4' , 
    'T3NX68' , 
    'TGYQMP' , 
    'R554JW' , 
    'HJTNGS' , 
    'JDYJUQ' , 
    'J2B3D8' , 
    'SM7RA7' , 
    '5RA274' , 
    '2UDVYX' , 
    'Y36Y3A' , 
    'MFDHY7' , 
    '6P3CFQ' , 
    '226N3G' , 
    'JVCSYW' , 
    '5MCPTG' , 
    'N23A98' , 
    '4GN3GC' , 
    '226RGN' , 
    '3GWXY4' , 
    'U2X4AM' , 
    '86MMDD' , 
    'SCSCW5' , 
    'HMCRXT' , 
    '83MKGW' , 
    'YU4F8E' , 
    'WX6JWM' , 
    'X58KBH' , 
    '6S9TY2' , 
    'K4HA6G' , 
    '6YSERG' , 
    'BJ6T88' , 
    'T2CDCF' , 
    'KG9PBN' , 
    'Q58MVV' , 
    'CFP2KD' , 
    'RSGB77' , 
    '9D5BHQ' , 
    'E6EBJ7' , 
    '4729CX' , 
    'CKU482' , 
    'H2Y5JW' , 
    'TJS58G' , 
    'SGNWNF' , 
    'TA2HCE' , 
    '4S7VGS' , 
    'M2KNY6' , 
    '6PWM4H' , 
    'HM7E39' , 
    'Q5HMQC' , 
    'DV729H' , 
    'TY9RKH' , 
    'YT9XBU' , 
    '4VRWQ7' , 
    '4SS8EQ' , 
    '635B7Q' , 
    '8SC43N' , 
    '9WYR7N' , 
    'NEXK9X' , 
    'XUFE25' , 
    'CT29QD' , 
    'GQ3SJK' , 
    'KRXEJQ' , 
    'GEWR9Q' , 
    'DTD4MW' , 
    'UYN95K' , 
    'AHFNC4' , 
    'PXXGM8' , 
    'N8XNPJ' , 
    'BEQAUQ' , 
    'XRQ7RQ' , 
    '3H2HAG' , 
    'YGYSGJ' , 
    '8MCW5H' , 
    'X2DUDW' , 
    '4DVGE4' , 
    'DMQPQX' , 
    'Q2BK73' , 
    'RQ92DN' , 
    'MEJYKB' , 
    'GTC95G' , 
    'KAKUJU' , 
    '4F847M' , 
    'ND792A' , 
    'YC2JCR' , 
    'MX67XH' , 
    '98E25D' , 
    'RHV3MV' , 
    'CMQADX' , 
    'GBS9JX' , 
    'W3A468' , 
    'AU4FAQ' , 
    'E23NJ4' , 
    'VAG3TT' , 
    '9JAHEH' , 
    'J3VBP3' , 
    'NEPCAE' , 
    '9WVN4X' , 
    'AUV2VR' , 
    '8FAP5T' , 
    '6SXV2U' , 
    '636FCU' , 
    'E6AF9G' , 
    'RUYVVK' , 
    '3ECFU9' , 
    'QM8DUP' , 
    '996GFJ' , 
    '8R2KN6' , 
    'SSNXR7' , 
    'QRQC54' , 
    'SSNXR8' , 
    'CF54DS' , 
    'DFPW32' , 
    'BJ7RVS' , 
    '3MG4QP' , 
    'PQF92P' , 
    'P8AV55' , 
    'RHXJ33' , 
    'REDNUA' , 
    '65PF6T' , 
    'FEKDE8' , 
    'AAESD8' , 
    '4JCK4K' , 
    'UARCG5' , 
    '4RWVSX' , 
    'BTJD3J' , 
    '76MWW9' , 
    'P5PD5R' , 
    '7DRB97' , 
    'TGH95V' , 
    '465GEG' , 
    'UDKQU5' , 
    'GR29S3' , 
    '5S2HQ2' , 
    'Q4UWC7' , 
    '68AAU9' , 
    '2SQCFQ' , 
    'XSK7EK' , 
    'KUCC2F' , 
    '24EB5N' , 
    'NTQ65D' , 
    'H4EAY5' , 
    '3THT86' , 
    '736G54' , 
    '936G54' , 
    'BQPNMY' , 
    'S9DFWX' , 
    'NV3N4D' , 
    'AMWTDG' , 
    'MR2AUC' , 
    '5DG6AV' , 
    '6UQASE' , 
    'YEPB5G' , 
    'KVM8RT' , 
    'FTEHKS' , 
    'X4KP4W' , 
    'SVH5VB' , 
    '92J5AJ' , 
    'PDSRVQ' , 
    'D99Y95' , 
    'QS6CWB' , 
    '535NVR' ,
    'YQV3AV' ,
    '8NYRP3' ,
    'CMK2Y9' ,
    '7HNY8X' ,
    'MCA6YT' ,
    'QVQYUY' ,
    'AFN7FW' ,
    '33EMQC' ,
    'DNH2CH' ,
'4QSBNT' ,	'W2Y7S3' ,	'KBEWSY' ,	'EMDYRV' ,	'6K24W3' ,	'N4KPXX' ,	'P2PWXY' ,	'8AWVRS' ,
'D7RVPM' ,	'SJGM6M' ,	'JXE7T2' ,	'HNTMKG' ,	'UJ7YMK' ,	'TYX5KJ' ,	'8N8NY2' ,	'7QYQDU' ,
'45GJEP' ,	'Q42MJ4' ,	'9MEDEP' ,	'UJHEYG' ,	'DCWR2N' ,	'N7K6DM' ,	'JRXJJJ' ,  'G3S3A2' ,
'DY27GD' ,	'7HR2WY' ,	'VJC7U3' ,	'D5GM43' ,	'CUGYWD' ,	'X9D28P' ,	'D65N2Y' ,  'M49J4K' , 
'3MUB2R' ,	'KPGAE6' ,	'8T6P7U' ,	'9HGXM7' ,	'G3T6G3' ,	'XWN9AW' ,	'5GQBEV' ,	'TMMGQN' , 
'ERADQN' ,	'QCMUG7' ,	'U64GY5' ,	'SN49VD' ,	'NMRS2P' ,	'9XY5WJ' ,	'T6GA6U' ,	'X2XX3N' ,
'KU6X3P' ,	'MUKPEH' ,	'U3XTRV' ,	'WNUGE7' ,	'D7V9Q9' ,	'9S479V' ,	'RQD5S3' ,	'6N5BTK' ,
'W4JMJP' ,	'4Y4A63' ,	'U4SRAS' ,	'JRQEXX' ,	'N22TA8' ,	'4FQJTN' ,	'4K8WSC' ,	'6WRV43' , 
'RC73FB' ,	'SUU98U' ,	'4DQP2B' ,	'8TR6UR' ,	'QM7G5M' ,	'XWDTA9' ,	'YGWQYV' ,	'P4D6HY' , 
'4AXPMJ' ,	'HDWGN7' ,	'8B6U3X' ,	'VQ2C33' ,	'DMWXC4' ,	'X95NTD' ,	'C7W6AX' ,	'4QCWMN' , 
'RA69PX' ,	'GV67SF' ,	'8A3CGX' ,	'F9B65Q' ,	'UTEHJT' ,	'JHVPY9' ,	'3BDW2B' ,	'SR77YS' , 
'GQNQNA' ,	'5C2T6T' ,	'83NFQ3' ,	'KYVVV4' ,	'6K2DE2' ,	'2CHV9X' ,	'BUA82T' ,	'QU8PMM' , 
'7PB2KF' ,	'KYGHPY' ,	'BQHT2F' ,	'Q6CXBJ' ,	'QTFB6C' ,	'JMEEB3' ,	'SJUA6M' ,	'7MRF7V' , 
'XAN2A6' ,	'U4KNNK' ,	'PE8V6S' ,	'GGWSAS' ,	'77B4SW' ,	'T5C7TE' ,	'XY2W39' ,
'MHDTJ3' ,	'3GKDDW' ,	'DCWR2N' ,	'PV86W8' ,	'JPTYR6' ,	'3FAKQD' ,	'DVDYA5' ,	'REDNUA' , 
'VHCFPD' ,	'6GG6KM' ,	'X9D28P' ,	'6JXQ9J' ,	'DMQPQX' ,	'N4KPXX' ,	'22PQ39' ,	'JMNF69' , 
'KV7SAV' ,	'29HHJD' ,	'D7RVPM' ,	'YHHKFR' ,	'D28YPW' ,	'9QUFDT' ,	'JEKVQA' ,	'394T4K' , 
'72V5K8' ,	'J3DE7D' ,	'57HJ8N' ,	'5FEDY3' ,	'EMDYRV' ,	'TN3MC6' ,	'PQH83V' ,	'F6Y7AQ' , 
'HMCRXT' ,	'NTUJ5U' ,	'XDSTAF' ,	'FC7JWC' ,	'N2KFQU' ,	'3RD6WA' ,	'P2YXMD' ,	'58XKQQ' , 
'K9W4XQ' ,	'YVDHWY' ,	'D5VNXQ' ,	'8STHPS' ,	'K4F7MV' ,	'3TSQAT' ,	'PJ6A76' ,	'8RM3K3' , 
'EGCN2N' ,	'45GJEP' ,	'PRB8DN' ,	'MVUAXY' ,	'23XH8E' ,	'UUMRM5' ,	'84RDAG' ,	'RW5GTA' , 
'CM78UB' ,	'PXMV94' ,	'TFRH6G' ,	'A3PRXT' ,	'4EAEN6' ,	'W3K4XA' ,	'ENNNDS' ,	'RH26UQ' , 
'4K5NBC' ,	'RPB7XQ' ,	'2B3QP4' ,	'H63DXD' ,	'HRACFV' ,	'UNQSHY' ,	'M8PMJF' ,	'SCDCW5' , 
'KTURET' ,	'HEC5F2' ,	'Q5W2CW' ,	'FGXT9V' ,	'CSKVPT' ,	'P6T7C2' ,	'9MEDEP' ,	'435HQH' , 
'32R8G9' ,	'U4PJUQ' ,	'9C5JAC' ,	'EADV2K' ,	'E862Q2' ,	'VADEYB' ,	'QQURHF' ,	'WFH23S' , 
'4Y7TDG' ,	'JB4MDB' ,	'XBT5NE' ,	'N2W6K5' ,	'NEUH6P' ,	'2TNEPX' ,	'JYYHB7' ,	'72V7PG' , 
'T7K9SU' ,	'X4KP4W' ,	'3H43AH' ,	'9YDSW2' ,	'4AA5AC' ,	'X5PY5K' ,	'DQEQQ8' ,	'T5C7TE' , 
'3WDNDC' ,	'3NR141' ,	'2BFJ97' ,	'6K24W3' ,	'4QSBNT' ,	'FXWFMS' ,	'54NP9J' ,	'8NV9TC' , 
'GQQ4YR' ,	'9WGXAE' ,	'KDF7DD' ,	'2W5BKY' ,	'WSAD2U' ,	'VK7CUV' ,	'A55CDJ' ,	'K7NJME' , 
'K5225A' ,	'3MCJTT' ,	'YDRUM5' ,	'Q6Y3WX' ,	'RXT2KB' ,	'2WDWD7' ,	'K6VSPB' ,	'V4GJ29' , 
'S98YWQ' ,	'P9B58B' ,	'AG5DGQ' ,	'KHU54V' ,	'WU9UFT' ,	'D23BR5' ,	'SVH5VB' ,	'HKJDP4' , 
'XUFE25' ,	'KCD8JC' ,	'6JRCJ3' ,	'636FCU' ,	'XQMY4J' ,	'427ECF' ,	'S6QCW5' ,	'7AX9V8' , 
'NMEFHE' ,	'4J2XDQ' ,	'QS59HK' ,	'P3CTP3' ,	'TKUDKQ' ,	'6N2M5G' ,	'94PF8X' ,	'SJJP7D' , 
'N289GR' ,	'45B97D' ,	'UFFVS2' ,	'KSDCXE' ,	'MSUR4N' ,	'CUURVX' ,	'6HUNA5' ,	'H77KR3' , 
'G2VEGS' ,	'HR4VPD' ,	'362BD2' ,	'9N7FDB' ,	'D7DW62' ,	'T2WYPT' ,	'U8JCCE' ,	'567FF3' , 
'XKB73E' ,	'EU73P9' ,	'9462RP' ,	'FN7BD5' ,	'QHXNFD' ,	'PRF9B8' ,	'PEVUTB' ,	'JBM25W' , 
'TGTN56' ,	'7EY8BN' ,	'UPS3MM' ,	'82GP5R' ,	'U8KVQ4' ,	'JB9D62' ,	'RU3MXQ' ,	'C9UMWA' ]


var index = parseInt(GM_getValue("index", 0));

console.log(index+ '/' +codes.length);
if (index < codes.length - 1)
{
	var f = document.forms[0];
	f.getElementsByTagName('input')[0].value = codes[index];
	f.addEventListener('submit',submitHandler,false);
}
else
{
	GM_setValue('index',codes.length-1);
	index = codes.length-1;
	if (numClick > 0)
	{
		numClick = 0;
		GM_setValue('autoclicknum', 0);
		alert("no more codes!\nBug the author with a donation and tell him you need more ;)");
	}
}

function submitHandler()
{
	var nc = parseInt(document.getElementById("acdn").value);
	if (nc > 0)
		GM_setValue('autoclicknum', nc-1);
	if (index < codes.length - 1)
		if (f.getElementsByTagName('input')[0].value == codes[index])
			GM_setValue('index',index+1);
}
function include(arr,obj) {
	return (arr.indexOf(obj) != -1);
}

// auto-click mechanism
var wwash = document.getElementsByClassName('inviteSectionHeader')[0];
wwash.innerHTML += '<br><p style="font-size: 10px; color: #0f0; padding: 5px 0">AutoClick <input id="acdn" type="text" value="'+numClick+'" style="background: #000; color: #0f0; border: #0f0 1px solid; width: 30px"> times</p>';
wwash.style.height = 'auto';
if (numClick > 0)
	click(document.getElementsByClassName('btnInvite')[0]);

// Click by JoeSimmons
// Syntax: click(element); // String argument will grab it by id, or you can supply an element
function click(e, type) {
if(!e) {return;}
if(typeof e=='string') e=document.getElementById(e);
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent((type||'click'),true,true,window,0,0,0,0,0,false,false,false,false,0,null);
e.dispatchEvent(evObj);
}
