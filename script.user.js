// ==UserScript==
// @name         MangaDex prevent scroll hijacking.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the scroll hijacking introducted in MangaDex v3's new reader.
// @author       Andoryuuta
// @match        *://mangadex.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", function(r) {
        switch (r.key.toLowerCase()) {
            case "arrowup":
            case "up":
            case "w":
            case "arrowdown":
            case "down":
            case "s":
                r.stopImmediatePropagation();
        }
    });
})();
