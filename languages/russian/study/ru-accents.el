;; -*- coding: utf-8; lexical-binding: t; -*-
;; Refer to Xah Lee's abbrev mode tutorial for technical help
;; http://ergoemacs.org/emacs/emacs_abbrev_mode.html

;; Evaluate this buffer in emacs---I'm assuming you don't have your own abbrevs set. 
;; M-x eval-buffer

;; Now, type three of any Russian vowel to get its accented variant.
(clear-abbrev-table global-abbrev-table)

(define-abbrev-table 'global-abbrev-table
  ;; Accented values from https://expressrussian.com/russian-letters-with-accents/
  '(
    ;; Note: if your fonts are not configured properly, you may not be able to see these...
    ("ааа" "а́")
    ("еее" "е́")
    ("иии" "и́")
    ("ооо" "о́")
    ("ууу" "у́")
    ("ыыы" "ы́")
    ("эээ" "э́")
    ("ююю" "ю́")
    ("яяя" "я́")
    ))

(set-default 'abbrev-mode t)

(setq save-abbrevs nil)
