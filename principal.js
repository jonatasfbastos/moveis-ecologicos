{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red128\green10\blue69;\red26\green23\blue24;\red48\green63\blue147;
\red15\green115\blue53;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\fs26 \cf2 \expnd0\expndtw0\kerning0
var \cf0 \expnd0\expndtw0\kerning0
banners \cf3 \expnd0\expndtw0\kerning0
=\
\cf0 \expnd0\expndtw0\kerning0
    [\cf4 \expnd0\expndtw0\kerning0
"Os melhores do Brasil!"\cf0 \expnd0\expndtw0\kerning0
, \cf4 \expnd0\expndtw0\kerning0
"Qualidade e pre\'e7o baixo!"\cf0 \expnd0\expndtw0\kerning0
];\
\cf2 \expnd0\expndtw0\kerning0
var \cf0 \expnd0\expndtw0\kerning0
bannerAtual \cf3 \expnd0\expndtw0\kerning0
= 0\cf0 \expnd0\expndtw0\kerning0
;\
\cf2 \expnd0\expndtw0\kerning0
function \cf0 \expnd0\expndtw0\kerning0
trocaBanner() \{\
  bannerAtual \cf3 \expnd0\expndtw0\kerning0
= \cf0 \expnd0\expndtw0\kerning0
(bannerAtual \cf3 \expnd0\expndtw0\kerning0
+ 1\cf0 \expnd0\expndtw0\kerning0
) \cf3 \expnd0\expndtw0\kerning0
% 2\cf0 \expnd0\expndtw0\kerning0
;\
\pard\pardeftab720
\cf5 \expnd0\expndtw0\kerning0
  document\cf0 \expnd0\expndtw0\kerning0
.querySelector(\cf4 \expnd0\expndtw0\kerning0
\'92h2#mensagem\'92\cf0 \expnd0\expndtw0\kerning0
).textContent \cf3 \expnd0\expndtw0\kerning0
=\
\pard\pardeftab720
\cf0 \expnd0\expndtw0\kerning0
    banners[bannerAtual];\
\}\
\pard\pardeftab720\sa240
\cf0 \expnd0\expndtw0\kerning0
setInterval(trocaBanner, \cf3 \expnd0\expndtw0\kerning0
1000\cf0 \expnd0\expndtw0\kerning0
);\uc0\u8232 
\fs24 \expnd0\expndtw0\kerning0
\
}