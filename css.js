/* Copyright Google Inc.
 * Licensed under the Apache Licence Version 2.0
 * \@overrides window
 * \@provides cssSchema, CSS_PROP_BIT_QUANTITY, CSS_PROP_BIT_HASH_VALUE, CSS_PROP_BIT_NEGATIVE_QUANTITY, CSS_PROP_BIT_QSTRING, CSS_PROP_BIT_URL, CSS_PROP_BIT_UNRESERVED_WORD, CSS_PROP_BIT_UNICODE_RANGE, CSS_PROP_BIT_GLOBAL_NAME, CSS_PROP_BIT_PROPERTY_NAME */

// Check if window is available. If not using self (for correct work in service workers
var globalScope = typeof window !== 'undefined' ? window : self;

/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_QUANTITY = 1;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_HASH_VALUE = 2;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_NEGATIVE_QUANTITY = 4;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_QSTRING = 8;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_URL = 16;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_UNRESERVED_WORD = 64;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_UNICODE_RANGE = 128;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_GLOBAL_NAME = 512;
/**
 * @const
 * @type {number}
 */
var CSS_PROP_BIT_PROPERTY_NAME = 1024;
var cssSchema = (function () {
    var L = [ [ 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet',
        'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral',
        'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue',
        'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki',
        'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred',
        'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray',
        'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
        'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
        'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green',
        'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory',
        'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon',
        'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
        'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
        'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow',
        'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine',
        'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
        'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
        'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose',
        'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
        'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
        'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
        'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown',
        'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen',
        'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray',
        'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato',
        'transparent', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke',
        'yellow', 'yellowgreen' ], [ 'all-scroll', 'col-resize', 'crosshair',
        'default', 'e-resize', 'hand', 'help', 'move', 'n-resize', 'ne-resize',
        'no-drop', 'not-allowed', 'nw-resize', 'pointer', 'progress',
        'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text',
        'vertical-text', 'w-resize', 'wait' ], [ 'armenian', 'decimal',
        'decimal-leading-zero', 'disc', 'georgian', 'lower-alpha',
        'lower-greek', 'lower-latin', 'lower-roman', 'square', 'upper-alpha',
        'upper-latin', 'upper-roman' ], [ '100', '200', '300', '400', '500',
        '600', '700', '800', '900', 'bold', 'bolder', 'lighter' ], [
        'block-level', 'inline-level', 'table-caption', 'table-cell',
        'table-column', 'table-column-group', 'table-footer-group',
        'table-header-group', 'table-row', 'table-row-group' ], [ 'condensed',
        'expanded', 'extra-condensed', 'extra-expanded', 'narrower',
        'semi-condensed', 'semi-expanded', 'ultra-condensed', 'ultra-expanded',
        'wider' ], [ 'inherit', 'inline', 'inline-block', 'inline-box',
        'inline-flex', 'inline-grid', 'inline-list-item', 'inline-stack',
        'inline-table', 'run-in' ], [ 'behind', 'center-left', 'center-right',
        'far-left', 'far-right', 'left-side', 'leftwards', 'right-side',
        'rightwards' ], [ 'large', 'larger', 'small', 'smaller', 'x-large',
        'x-small', 'xx-large', 'xx-small' ], [ 'dashed', 'dotted', 'double',
        'groove', 'outset', 'ridge', 'solid' ], [ 'ease', 'ease-in',
        'ease-in-out', 'ease-out', 'linear', 'step-end', 'step-start' ], [
        'at', 'closest-corner', 'closest-side', 'ellipse', 'farthest-corner',
        'farthest-side' ], [ 'baseline', 'middle', 'sub', 'super',
        'text-bottom', 'text-top' ], [ 'caption', 'icon', 'menu',
        'message-box', 'small-caption', 'status-bar' ], [ 'fast', 'faster',
        'slow', 'slower', 'x-fast', 'x-slow' ], [ 'above', 'below', 'higher',
        'level', 'lower' ], [ 'cursive', 'fantasy', 'monospace', 'sans-serif',
        'serif' ], [ 'loud', 'silent', 'soft', 'x-loud', 'x-soft' ], [
        'no-repeat', 'repeat-x', 'repeat-y', 'round', 'space' ], [ 'blink',
        'line-through', 'overline', 'underline' ], [ 'block', 'flex', 'grid',
        'table' ], [ 'high', 'low', 'x-high', 'x-low' ], [ 'nowrap', 'pre',
        'pre-line', 'pre-wrap' ], [ 'absolute', 'relative', 'static' ], [
        'alternate', 'alternate-reverse', 'reverse' ], [ 'border-box',
        'content-box', 'padding-box' ], [ 'capitalize', 'lowercase',
        'uppercase' ], [ 'child', 'female', 'male' ], [ '=', 'opacity' ], [
        'backwards', 'forwards' ], [ 'bidi-override', 'embed' ], [ 'bottom',
        'top' ], [ 'break-all', 'keep-all' ], [ 'clip', 'ellipsis' ], [
        'contain', 'cover' ], [ 'continuous', 'digits' ], [ 'end', 'start' ], [
        'flat', 'preserve-3d' ], [ 'hide', 'show' ], [ 'inside', 'outside' ], [
        'italic', 'oblique' ], [ 'left', 'right' ], [ 'ltr', 'rtl' ], [
        'no-content', 'no-display' ], [ 'paused', 'running' ], [ 'suppress',
        'unrestricted' ], [ 'thick', 'thin' ], [ ',' ], [ '/' ], [ 'all' ], [
        'always' ], [ 'auto' ], [ 'avoid' ], [ 'both' ], [ 'break-word' ], [
        'center' ], [ 'circle' ], [ 'code' ], [ 'collapse' ], [ 'contents' ], [
        'fixed' ], [ 'hidden' ], [ 'infinite' ], [ 'inset' ], [ 'invert' ], [
        'justify' ], [ 'list-item' ], [ 'local' ], [ 'medium' ], [ 'mix' ], [
        'none' ], [ 'normal' ], [ 'once' ], [ 'repeat' ], [ 'scroll' ], [
        'separate' ], [ 'small-caps' ], [ 'spell-out' ], [ 'to' ], [ 'visible'
      ] ];
    var schema = {
      'animation': {
        'cssPropBits': 517,
        'cssLitGroup': [ L[ 10 ], L[ 24 ], L[ 29 ], L[ 44 ], L[ 47 ], L[ 53 ],
          L[ 62 ], L[ 70 ], L[ 71 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'animation-delay': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 47 ] ],
        'cssFns': [ ]
      },
      'animation-direction': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 24 ], L[ 47 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'animation-duration': 'animation-delay',
      'animation-fill-mode': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 29 ], L[ 47 ], L[ 53 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'animation-iteration-count': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 47 ], L[ 62 ] ],
        'cssFns': [ ]
      },
      'animation-name': {
        'cssPropBits': 512,
        'cssLitGroup': [ L[ 47 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'animation-play-state': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 44 ], L[ 47 ] ],
        'cssFns': [ ]
      },
      'animation-timing-function': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 10 ], L[ 47 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'appearance': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ ]
      },
      'azimuth': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 7 ], L[ 41 ], L[ 55 ] ],
        'cssFns': [ ]
      },
      'backface-visibility': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 58 ], L[ 61 ], L[ 79 ] ],
        'cssFns': [ ]
      },
      'background': {
        'cssPropBits': 23,
        'cssLitGroup': [ L[ 0 ], L[ 18 ], L[ 25 ], L[ 31 ], L[ 34 ], L[ 41 ],
          L[ 47 ], L[ 48 ], L[ 51 ], L[ 55 ], L[ 60 ], L[ 67 ], L[ 70 ], L[ 73
          ], L[ 74 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()',
          'rgb()', 'rgba()' ]
      },
      'background-attachment': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 47 ], L[ 60 ], L[ 67 ], L[ 74 ] ],
        'cssFns': [ ]
      },
      'background-color': {
        'cssPropBits': 2,
        'cssLitGroup': [ L[ 0 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'background-image': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 47 ], L[ 70 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'background-position': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 31 ], L[ 41 ], L[ 47 ], L[ 55 ] ],
        'cssFns': [ ]
      },
      'background-repeat': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 18 ], L[ 47 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'border': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 9 ], L[ 46 ], L[ 61 ], L[ 63 ], L[ 68 ], L[
            70 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'border-bottom': 'border',
      'border-bottom-color': 'background-color',
      'border-bottom-left-radius': {
        'cssPropBits': 5,
        'cssFns': [ ]
      },
      'border-bottom-right-radius': 'border-bottom-left-radius',
      'border-bottom-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 9 ], L[ 61 ], L[ 63 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'border-bottom-width': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 46 ], L[ 68 ] ],
        'cssFns': [ ]
      },
      'border-collapse': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 58 ], L[ 75 ] ],
        'cssFns': [ ]
      },
      'border-color': 'background-color',
      'border-left': 'border',
      'border-left-color': 'background-color',
      'border-left-style': 'border-bottom-style',
      'border-left-width': 'border-bottom-width',
      'border-radius': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 48 ] ],
        'cssFns': [ ]
      },
      'border-right': 'border',
      'border-right-color': 'background-color',
      'border-right-style': 'border-bottom-style',
      'border-right-width': 'border-bottom-width',
      'border-spacing': 'border-bottom-left-radius',
      'border-style': 'border-bottom-style',
      'border-top': 'border',
      'border-top-color': 'background-color',
      'border-top-left-radius': 'border-bottom-left-radius',
      'border-top-right-radius': 'border-bottom-left-radius',
      'border-top-style': 'border-bottom-style',
      'border-top-width': 'border-bottom-width',
      'border-width': 'border-bottom-width',
      'bottom': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 51 ] ],
        'cssFns': [ ]
      },
      'box': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 59 ], L[ 70 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'box-shadow': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 47 ], L[ 63 ], L[ 70 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'box-sizing': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 25 ] ],
        'cssFns': [ ]
      },
      'caption-side': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 31 ] ],
        'cssFns': [ ]
      },
      'clear': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 41 ], L[ 53 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'clip': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 51 ] ],
        'cssFns': [ 'rect()' ]
      },
      'color': 'background-color',
      'content': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 70 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'cue': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ ]
      },
      'cue-after': 'cue',
      'cue-before': 'cue',
      'cursor': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 1 ], L[ 47 ], L[ 51 ] ],
        'cssFns': [ ]
      },
      'direction': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 42 ] ],
        'cssFns': [ ]
      },
      'display': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 4 ], L[ 6 ], L[ 20 ], L[ 51 ], L[ 66 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'display-extras': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 66 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'display-inside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 20 ], L[ 51 ] ],
        'cssFns': [ ]
      },
      'display-outside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 4 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'elevation': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 15 ] ],
        'cssFns': [ ]
      },
      'empty-cells': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 38 ] ],
        'cssFns': [ ]
      },
      'filter': {
        'cssPropBits': 0,
        'cssFns': [ 'alpha()' ]
      },
      'float': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 41 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'font': {
        'cssPropBits': 73,
        'cssLitGroup': [ L[ 3 ], L[ 8 ], L[ 13 ], L[ 16 ], L[ 40 ], L[ 47 ], L[
            48 ], L[ 68 ], L[ 71 ], L[ 76 ] ],
        'cssFns': [ ]
      },
      'font-family': {
        'cssPropBits': 72,
        'cssLitGroup': [ L[ 16 ], L[ 47 ] ],
        'cssFns': [ ]
      },
      'font-size': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 8 ], L[ 68 ] ],
        'cssFns': [ ]
      },
      'font-stretch': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 5 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'font-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 40 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'font-variant': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 71 ], L[ 76 ] ],
        'cssFns': [ ]
      },
      'font-weight': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 3 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'height': 'bottom',
      'left': 'bottom',
      'letter-spacing': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 71 ] ],
        'cssFns': [ ]
      },
      'line-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 71 ] ],
        'cssFns': [ ]
      },
      'list-style': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 2 ], L[ 39 ], L[ 56 ], L[ 70 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'list-style-image': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ 'image()', 'linear-gradient()', 'radial-gradient()',
          'repeating-linear-gradient()', 'repeating-radial-gradient()' ]
      },
      'list-style-position': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 39 ] ],
        'cssFns': [ ]
      },
      'list-style-type': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 2 ], L[ 56 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'margin': 'bottom',
      'margin-bottom': 'bottom',
      'margin-left': 'bottom',
      'margin-right': 'bottom',
      'margin-top': 'bottom',
      'max-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 51 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'max-width': 'max-height',
      'min-height': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 51 ] ],
        'cssFns': [ ]
      },
      'min-width': 'min-height',
      'opacity': {
        'cssPropBits': 1,
        'cssFns': [ ]
      },
      'outline': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 9 ], L[ 46 ], L[ 61 ], L[ 63 ], L[ 64 ], L[
            68 ], L[ 70 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'outline-color': {
        'cssPropBits': 2,
        'cssLitGroup': [ L[ 0 ], L[ 64 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'outline-style': 'border-bottom-style',
      'outline-width': 'border-bottom-width',
      'overflow': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 51 ], L[ 61 ], L[ 74 ], L[ 79 ] ],
        'cssFns': [ ]
      },
      'overflow-wrap': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 54 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'overflow-x': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 43 ], L[ 51 ], L[ 61 ], L[ 74 ], L[ 79 ] ],
        'cssFns': [ ]
      },
      'overflow-y': 'overflow-x',
      'padding': 'opacity',
      'padding-bottom': 'opacity',
      'padding-left': 'opacity',
      'padding-right': 'opacity',
      'padding-top': 'opacity',
      'page-break-after': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 41 ], L[ 50 ], L[ 51 ], L[ 52 ] ],
        'cssFns': [ ]
      },
      'page-break-before': 'page-break-after',
      'page-break-inside': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 51 ], L[ 52 ] ],
        'cssFns': [ ]
      },
      'pause': 'border-bottom-left-radius',
      'pause-after': 'border-bottom-left-radius',
      'pause-before': 'border-bottom-left-radius',
      'perspective': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ ]
      },
      'perspective-origin': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 31 ], L[ 41 ], L[ 55 ] ],
        'cssFns': [ ]
      },
      'pitch': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 21 ], L[ 68 ] ],
        'cssFns': [ ]
      },
      'pitch-range': 'border-bottom-left-radius',
      'play-during': {
        'cssPropBits': 16,
        'cssLitGroup': [ L[ 51 ], L[ 69 ], L[ 70 ], L[ 73 ] ],
        'cssFns': [ ]
      },
      'position': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 23 ] ],
        'cssFns': [ ]
      },
      'quotes': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ ]
      },
      'richness': 'border-bottom-left-radius',
      'right': 'bottom',
      'speak': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 70 ], L[ 71 ], L[ 77 ] ],
        'cssFns': [ ]
      },
      'speak-header': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 50 ], L[ 72 ] ],
        'cssFns': [ ]
      },
      'speak-numeral': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 35 ] ],
        'cssFns': [ ]
      },
      'speak-punctuation': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 57 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'speech-rate': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 14 ], L[ 68 ] ],
        'cssFns': [ ]
      },
      'stress': 'border-bottom-left-radius',
      'table-layout': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 51 ], L[ 60 ] ],
        'cssFns': [ ]
      },
      'text-align': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 41 ], L[ 55 ], L[ 65 ] ],
        'cssFns': [ ]
      },
      'text-decoration': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 19 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'text-indent': 'border-bottom-left-radius',
      'text-overflow': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 33 ] ],
        'cssFns': [ ]
      },
      'text-shadow': 'box-shadow',
      'text-transform': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 26 ], L[ 70 ] ],
        'cssFns': [ ]
      },
      'text-wrap': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 45 ], L[ 70 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'top': 'bottom',
      'transform': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 70 ] ],
        'cssFns': [ 'matrix()', 'perspective()', 'rotate()', 'rotate3d()',
          'rotatex()', 'rotatey()', 'rotatez()', 'scale()', 'scale3d()',
          'scalex()', 'scaley()', 'scalez()', 'skew()', 'skewx()', 'skewy()',
          'translate()', 'translate3d()', 'translatex()', 'translatey()',
          'translatez()' ]
      },
      'transform-origin': 'perspective-origin',
      'transform-style': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 37 ] ],
        'cssFns': [ ]
      },
      'transition': {
        'cssPropBits': 1029,
        'cssLitGroup': [ L[ 10 ], L[ 47 ], L[ 49 ], L[ 70 ] ],
        'cssFns': [ 'cubic-bezier()', 'steps()' ]
      },
      'transition-delay': 'animation-delay',
      'transition-duration': 'animation-delay',
      'transition-property': {
        'cssPropBits': 1024,
        'cssLitGroup': [ L[ 47 ], L[ 49 ] ],
        'cssFns': [ ]
      },
      'transition-timing-function': 'animation-timing-function',
      'unicode-bidi': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 30 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'vertical-align': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 12 ], L[ 31 ] ],
        'cssFns': [ ]
      },
      'visibility': 'backface-visibility',
      'voice-family': {
        'cssPropBits': 8,
        'cssLitGroup': [ L[ 27 ], L[ 47 ] ],
        'cssFns': [ ]
      },
      'volume': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 17 ], L[ 68 ] ],
        'cssFns': [ ]
      },
      'white-space': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 22 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'width': 'min-height',
      'word-break': {
        'cssPropBits': 0,
        'cssLitGroup': [ L[ 32 ], L[ 71 ] ],
        'cssFns': [ ]
      },
      'word-spacing': 'letter-spacing',
      'word-wrap': 'overflow-wrap',
      'z-index': 'bottom',
      'zoom': 'line-height',
      'cubic-bezier()': 'animation-delay',
      'steps()': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 36 ], L[ 47 ] ],
        'cssFns': [ ]
      },
      'image()': {
        'cssPropBits': 18,
        'cssLitGroup': [ L[ 0 ], L[ 47 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'linear-gradient()': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 31 ], L[ 41 ], L[ 47 ], L[ 78 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'radial-gradient()': {
        'cssPropBits': 7,
        'cssLitGroup': [ L[ 0 ], L[ 11 ], L[ 31 ], L[ 41 ], L[ 47 ], L[ 55 ],
          L[ 56 ] ],
        'cssFns': [ 'rgb()', 'rgba()' ]
      },
      'repeating-linear-gradient()': 'linear-gradient()',
      'repeating-radial-gradient()': 'radial-gradient()',
      'rgb()': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 47 ] ],
        'cssFns': [ ]
      },
      'rgba()': 'rgb()',
      'rect()': {
        'cssPropBits': 5,
        'cssLitGroup': [ L[ 47 ], L[ 51 ] ],
        'cssFns': [ ]
      },
      'alpha()': {
        'cssPropBits': 1,
        'cssLitGroup': [ L[ 28 ] ],
        'cssFns': [ ]
      },
      'matrix()': 'animation-delay',
      'perspective()': 'border-bottom-left-radius',
      'rotate()': 'border-bottom-left-radius',
      'rotate3d()': 'animation-delay',
      'rotatex()': 'border-bottom-left-radius',
      'rotatey()': 'border-bottom-left-radius',
      'rotatez()': 'border-bottom-left-radius',
      'scale()': 'animation-delay',
      'scale3d()': 'animation-delay',
      'scalex()': 'border-bottom-left-radius',
      'scaley()': 'border-bottom-left-radius',
      'scalez()': 'border-bottom-left-radius',
      'skew()': 'animation-delay',
      'skewx()': 'border-bottom-left-radius',
      'skewy()': 'border-bottom-left-radius',
      'translate()': 'animation-delay',
      'translate3d()': 'animation-delay',
      'translatex()': 'border-bottom-left-radius',
      'translatey()': 'border-bottom-left-radius',
      'translatez()': 'border-bottom-left-radius'
    };
    if (true) {
      for (var key in schema) {
        if ('string' === typeof schema[ key ] &&
          Object.hasOwnProperty.call(schema, key)) {
          schema[ key ] = schema[ schema[ key ] ];
        }
      }
    }
    return schema;
  })();

globalScope['cssSchema'] = cssSchema;


// CSS Lexer

var lexCss;
var decodeCss;

(function () {

  /**
   * Decodes an escape sequence as specified in CSS3 section 4.1.
   * http://www.w3.org/TR/css3-syntax/#characters
   * @private
   */
  function decodeCssEscape(s) {
    var i = parseInt(s.substring(1), 16);
    // If parseInt didn't find a hex diigt, it returns NaN so return the
    // escaped character.
    // Otherwise, parseInt will stop at the first non-hex digit so there's no
    // need to worry about trailing whitespace.
    if (i > 0xffff) {
      // A supplemental codepoint.
      return i -= 0x10000,
        String.fromCharCode(
            0xd800 + (i >> 10),
            0xdc00 + (i & 0x3FF));
    } else if (i == i) {
      return String.fromCharCode(i);
    } else if (s[1] < ' ') {
      // "a backslash followed by a newline is ignored".
      return '';
    } else {
      return s[1];
    }
  }

  /**
   * Returns an equivalent CSS string literal given plain text: foo -> "foo".
   * @private
   */
  function escapeCssString(s, replacer) {
    return '"' + s.replace(/[\u0000-\u001f\\\"<>]/g, replacer) + '"';
  }

  /**
   * Maps chars to CSS escaped equivalents: "\n" -> "\\a ".
   * @private
   */
  function escapeCssStrChar(ch) {
    return cssStrChars[ch]
        || (cssStrChars[ch] = '\\' + ch.charCodeAt(0).toString(16) + ' ');
  }

  /**
   * Maps chars to URI escaped equivalents: "\n" -> "%0a".
   * @private
   */
  function escapeCssUrlChar(ch) {
    return cssUrlChars[ch]
        || (cssUrlChars[ch] = (ch < '\x10' ? '%0' : '%')
            + ch.charCodeAt(0).toString(16));
  }

  /**
   * Mapping of CSS special characters to escaped equivalents.
   * @private
   */
  var cssStrChars = {
    '\\': '\\\\'
  };

  /**
   * Mapping of CSS special characters to URL-escaped equivalents.
   * @private
   */
  var cssUrlChars = {
    '\\': '%5c'
  };

  // The comments below are copied from the CSS3 module syntax at
  // http://www.w3.org/TR/css3-syntax .
  // These string constants minify out when this is run-through closure
  // compiler.
  // Rules that have been adapted have comments prefixed with "Diff:", and
  // where rules have been combined to avoid back-tracking in the regex engine
  // or to work around limitations, there is a comment prefixed with
  // "NewRule:".

  // In the below, we assume CRLF and CR have been normalize to CR.

  // wc  ::=  #x9 | #xA | #xC | #xD | #x20
  var WC = '[\\t\\n\\f ]';
  // w  ::=  wc*
  var W = WC + '*';
  // nl  ::=  #xA | #xD #xA | #xD | #xC
  var NL = '[\\n\\f]';
  // nonascii  ::=  [#x80-#xD7FF#xE000-#xFFFD#x10000-#x10FFFF]
  // NewRule: Supplemental codepoints are represented as surrogate pairs in JS.
  var SURROGATE_PAIR = '[\\ud800-\\udbff][\\udc00-\\udfff]';
  var NONASCII = '[\\u0080-\\ud7ff\\ue000-\\ufffd]|' + SURROGATE_PAIR;
  // unicode  ::=  '\' [0-9a-fA-F]{1,6} wc?
  // NewRule: No point in having ESCAPE do (\\x|\\y)
  var UNICODE_TAIL = '[0-9a-fA-F]{1,6}' + WC + '?';
  var UNICODE = '\\\\' + UNICODE_TAIL;
  // escape  ::=  unicode
  //           | '\' [#x20-#x7E#x80-#xD7FF#xE000-#xFFFD#x10000-#x10FFFF]
  // NewRule: Below we use escape tail to efficiently match an escape or a
  // line continuation so we can decode string content.
  var ESCAPE_TAIL = '(?:' + UNICODE_TAIL
      + '|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|'
      + SURROGATE_PAIR + ')';
  var ESCAPE = '\\\\' + ESCAPE_TAIL;
  // urlchar  ::=  [#x9#x21#x23-#x26#x28-#x7E] | nonascii | escape
  var URLCHAR = '(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|'
      + NONASCII + '|' + ESCAPE + ')';
  // stringchar  ::= urlchar | #x20 | '\' nl
  // We ignore mismatched surrogate pairs inside strings, so stringchar
  // simplifies to a non-(quote|newline|backslash) or backslash any.
  // Since we normalize CRLF to a single code-unit, there is no special
  // handling needed for '\\' + CRLF.
  var STRINGCHAR = '[^\'"\\n\\f\\\\]|\\\\[\\s\\S]';
  // string  ::=  '"' (stringchar | "'")* '"' | "'" (stringchar | '"')* "'"
  var STRING = '"(?:\'|' + STRINGCHAR + ')*"'
      + '|\'(?:\"|' + STRINGCHAR + ')*\'';
  // num  ::=  [0-9]+ | [0-9]* '.' [0-9]+
  // Diff: We attach signs to num tokens.
  var NUM = '[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)';
  // nmstart  ::=  [a-zA-Z] | '_' | nonascii | escape
  var NMSTART = '(?:[a-zA-Z_]|' + NONASCII + '|' + ESCAPE + ')';
  // nmchar  ::=  [a-zA-Z0-9] | '-' | '_' | nonascii | escape
  var NMCHAR = '(?:[a-zA-Z0-9_-]|' + NONASCII + '|' + ESCAPE + ')';
  // name  ::=  nmchar+
  var NAME = NMCHAR + '+';
  // ident  ::=  '-'? nmstart nmchar*
  var IDENT = '-?' + NMSTART + NMCHAR + '*';

  // ATKEYWORD  ::=  '@' ident
  var ATKEYWORD = '@' + IDENT;
  // HASH  ::=  '#' name
  var HASH = '#' + NAME;
  // NUMBER  ::=  num
  var NUMBER = NUM;

  // NewRule: union of IDENT, ATKEYWORD, HASH, but excluding #[0-9].
  var WORD_TERM = '(?:@?-?' + NMSTART + '|#)' + NMCHAR + '*';

  // PERCENTAGE  ::=  num '%'
  var PERCENTAGE = NUM + '%';
  // DIMENSION  ::=  num ident
  var DIMENSION = NUM + IDENT;
  var NUMERIC_VALUE = NUM + '(?:%|' + IDENT + ')?';
  // URI  ::=  "url(" w (string | urlchar* ) w ")"
  var URI = 'url[(]' + W + '(?:' + STRING + '|' + URLCHAR + '*)' + W + '[)]';
  // UNICODE-RANGE  ::=  "U+" [0-9A-F?]{1,6} ('-' [0-9A-F]{1,6})?
  var UNICODE_RANGE = 'U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?';
  // CDO  ::=  "<\!--"
  var CDO = '<\!--';
  // CDC  ::=  "-->"
  var CDC = '-->';
  // S  ::=  wc+
  var S = WC + '+';
  // COMMENT  ::=  "/*" [^*]* '*'+ ([^/] [^*]* '*'+)* "/"
  // Diff: recognizes // comments.
  var COMMENT = '/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)';
  // FUNCTION  ::=  ident '('
  // Diff: We exclude url explicitly.
  // TODO: should we be tolerant of "fn ("?
  var FUNCTION = '(?!url[(])' + IDENT + '[(]';
  // INCLUDES  ::=  "~="
  var INCLUDES = '~=';
  // DASHMATCH  ::=  "|="
  var DASHMATCH = '[|]=';
  // PREFIXMATCH  ::=  "^="
  var PREFIXMATCH = '[^]=';
  // SUFFIXMATCH  ::=  "$="
  var SUFFIXMATCH = '[$]=';
  // SUBSTRINGMATCH  ::=  "*="
  var SUBSTRINGMATCH = '[*]=';
  // NewRule: one rule for all the comparison operators.
  var CMP_OPS = '[~|^$*]=';
  // CHAR  ::=  any character not matched by the above rules, except for " or '
  // Diff: We exclude / and \ since they are handled above to prevent
  // /* without a following */ from combining when comments are concatenated.
  var CHAR = '[^"\'\\\\/]|/(?![/*])';
  // BOM  ::=  #xFEFF
  var BOM = '\\uFEFF';

  var CSS_TOKEN = new RegExp([
      BOM, UNICODE_RANGE, URI, FUNCTION, WORD_TERM, STRING, NUMERIC_VALUE,
      CDO, CDC, S, COMMENT, CMP_OPS, CHAR].join("|"), 'gi');

  var CSS_DECODER = new RegExp('\\\\(?:' + ESCAPE_TAIL + '|' + NL + ')', 'g');
  var URL_RE = new RegExp('^url\\(' + W + '["\']?|["\']?' + W + '\\)$', 'gi');
  /**
   * Decodes CSS escape sequences in a CSS string body.
   */
   decodeCss = function (css) {
     return css.replace(CSS_DECODER, decodeCssEscape);
   };

  /**
   * Given CSS Text, returns an array of normalized tokens.
   * @param {string} cssText
   * @return {Array.<string>} tokens where all ignorable token sequences have
   *    been reduced to a single {@code " "} and all strings and
   *    {@code url(...)} tokens have been normalized to use double quotes as
   *    delimiters and to not otherwise contain double quotes.
   */
  lexCss = function (cssText) {
    // Stringify input. Additionally, insert and remove a non-latin1 character
    // to force Firefox 33 to switch to a wide string representation, avoiding
    // a performance bug. This workaround should become unnecessary after
    // Firefox 34. https://bugzilla.mozilla.org/show_bug.cgi?id=1081175
    // https://code.google.com/p/google-caja/issues/detail?id=1941
    cssText = (String.fromCharCode(0xFFFF) + cssText).replace(/^\uffff/, '');

    // // Normalize CRLF & CR to LF.
    cssText = cssText.replace(/\r\n?/g, '\n');

    // Tokenize.
    var tokens = cssText.match(CSS_TOKEN) || [];
    var j = 0;
    var last = ' ';
    for (var i = 0, n = tokens.length; i < n; ++i) {
      // Normalize all escape sequences.  We will have to re-escape some
      // codepoints in string and url(...) bodies but we already know the
      // boundaries.
      // We might mistakenly treat a malformed identifier like \22\20\22 as a
      // string, but that will not break any valid stylesheets since we requote
      // and re-escape in string below.
      var tok = decodeCss(tokens[i]);
      var len = tok.length;
      var cc = tok.charCodeAt(0);
      tok =
          // All strings should be double quoted, and the body should never
          // contain a double quote.
          (cc == '"'.charCodeAt(0) || cc == '\''.charCodeAt(0))
          ? escapeCssString(tok.substring(1, len - 1), escapeCssStrChar)
          // A breaking ignorable token should is replaced with a single space.
          : (cc == '/'.charCodeAt(0) && len > 1  // Comment.
             || tok == '\\' || tok == CDC || tok == CDO || tok == '\ufeff'
             // Characters in W.
             || cc <= ' '.charCodeAt(0))
          ? ' '
          // Make sure that all url(...)s are double quoted.
          : /url\(/i.test(tok)
          ? 'url(' + escapeCssString(
            tok.replace(URL_RE, ''),
            escapeCssUrlChar)
            + ')'
          // Escapes in identifier like tokens will have been normalized above.
          : tok;
      // Merge adjacent space tokens.
      if (last != tok || tok != ' ') {
        tokens[j++] = last = tok;
      }
    }
    tokens.length = j;
    return tokens;
  };
})();

// Exports for closure compiler.

globalScope['lexCss'] = lexCss;
globalScope['decodeCss'] = decodeCss;

// CSS Parser


/**
 * @fileoverview
 * Utilities for dealing with CSS source code.
 *
 * @author mikesamuel@gmail.com
 * \@requires lexCss
 * \@overrides window
 * \@provides parseCssStylesheet, parseCssDeclarations
 */

// The Turkish i seems to be a non-issue, but abort in case it is.
if ('I'.toLowerCase() !== 'i') { throw 'I/i problem'; }

/**
 * parseCssStylesheet takes a chunk of CSS text and a handler object with
 * methods that it calls as below:
 * <pre>
 * // At the beginning of a stylesheet.
 * handler.startStylesheet();
 *
 * // For an @foo rule ended by a semicolon: @import "foo.css";
 * handler.startAtrule('@import', ['"foo.css"']);
 * handler.endAtrule();
 *
 * // For an @foo rule ended with a block. @media print { ... }
 * handler.startAtrule('@media', ['print']);
 * handler.startBlock();
 * // Calls to contents elided.  Probably selectors and declarations as below.
 * handler.endBlock();
 * handler.endAtrule();
 *
 * // For a ruleset: p.clazz q, s { color: blue; }
 * handler.startRuleset(['p', '.', 'clazz', ' ', 'q', ',', ' ', 's']);
 * handler.declaration('color', ['blue']);
 * handler.endRuleset();
 *
 * // At the end of a stylesheet.
 * handler.endStylesheet();
 * </pre>
 * When errors are encountered, the parser drops the useless tokens and
 * attempts to resume parsing.
 *
 * @param {string} cssText CSS3 content to parse as a stylesheet.
 * @param {Object} handler An object like <pre>{
 *   startStylesheet: function () { ... },
 *   endStylesheet: function () { ... },
 *   startAtrule: function (atIdent, headerArray) { ... },
 *   endAtrule: function () { ... },
 *   startBlock: function () { ... },
 *   endBlock: function () { ... },
 *   startRuleset: function (selectorArray) { ... },
 *   endRuleset: function () { ... },
 *   declaration: function (property, valueArray) { ... },
 * }</pre>
 */
var parseCssStylesheet;

/**
 * parseCssDeclarations parses a run of declaration productions as seen in the
 * body of the HTML5 {@code style} attribute.
 *
 * @param {string} cssText CSS3 content to parse as a run of declarations.
 * @param {Object} handler An object like <pre>{
 *   declaration: function (property, valueArray) { ... },
 * }</pre>
 */
var parseCssDeclarations;

(function () {
  // stylesheet  : [ CDO | CDC | S | statement ]*;
  parseCssStylesheet = function(cssText, handler) {
    var toks = lexCss(cssText);
    if (handler['startStylesheet']) { handler['startStylesheet'](); }
    for (var i = 0, n = toks.length; i < n;) {
      // CDO and CDC ("<!--" and "-->") are converted to space by the lexer.
      i = toks[i] === ' ' ? i+1 : statement(toks, i, n, handler);
    }
    if (handler['endStylesheet']) { handler['endStylesheet'](); }
  };

  // statement   : ruleset | at-rule;
  function statement(toks, i, n, handler) {
    if (i < n) {
      var tok = toks[i];
      if (tok.charAt(0) === '@') {
        return atrule(toks, i, n, handler, true);
      } else {
        return ruleset(toks, i, n, handler);
      }
    } else {
      return i;
    }
  }

  // at-rule     : ATKEYWORD S* any* [ block | ';' S* ];
  function atrule(toks, i, n, handler, blockok) {
    var start = i++;
    while (i < n && toks[i] !== '{' && toks[i] !== ';') {
      ++i;
    }
    if (i < n && (blockok || toks[i] === ';')) {
      var s = start+1, e = i;
      if (s < n && toks[s] === ' ') { ++s; }
      if (e > s && toks[e-1] === ' ') { --e; }
      if (handler['startAtrule']) {
        handler['startAtrule'](toks[start].toLowerCase(), toks.slice(s, e));
      }
      i = (toks[i] === '{')
          ? block(toks, i, n, handler)
          : i+1;  // Skip over ';'
      if (handler['endAtrule']) {
        handler['endAtrule']();
      }
    }
    // Else we reached end of input or are missing a semicolon.
    // Drop the rule on the floor.
    return i;
  }

  // block       : '{' S* [ any | block | ATKEYWORD S* | ';' S* ]* '}' S*;
   // Assumes the leading '{' has been verified by callers.
  function block(toks, i, n, handler) {
    ++i; //  skip over '{'
    if (handler['startBlock']) { handler['startBlock'](); }
    while (i < n) {
      var ch = toks[i].charAt(0);
      if (ch == '}') {
        ++i;
        break;
      }
      if (ch === ' ' || ch === ';') {
        i = i+1;
      } else if (ch === '@') {
        i = atrule(toks, i, n, handler, false);
      } else if (ch === '{') {
        i = block(toks, i, n, handler);
      } else {
        // Instead of using (any* block) to subsume ruleset we allow either
        // blocks or rulesets with a non-blank selector.
        // This is more restrictive but does not require atrule specific
        // parse tree fixup to realize that the contents of the block in
        //    @media print { ... }
        // is a ruleset.  We just don't care about any block carrying at-rules
        // whose body content is not ruleset content.
        i = ruleset(toks, i, n, handler);
      }
    }
    if (handler['endBlock']) { handler['endBlock'](); }
    return i;
  }

  // ruleset    : selector? '{' S* declaration? [ ';' S* declaration? ]* '}' S*;
  function ruleset(toks, i, n, handler) {
    // toks[s:e] are the selector tokens including internal whitespace.
    var s = i, e = selector(toks, i, n, true);
    if (e < 0) {
      // Skip malformed content per selector calling convention.
      e = ~e;
      // Make sure we skip at least one token.
      return e === s ? e+1 : e;
    }
    var tok = toks[e];
    if (tok !== '{') {
      // Make sure we skip at least one token.
      return e === s ? e+1 : e;
    }
    i = e+1;  // Skip over '{'
    // Don't include any trailing space in the selector slice.
    if (e > s && toks[e-1] === ' ') { --e; }
    if (handler['startRuleset']) {
      handler['startRuleset'](toks.slice(s, e));
    }
    while (i < n) {
      tok = toks[i];
      if (tok === '}') {
        ++i;
        break;
      }
      if (tok === ' ') {
        i = i+1;
      } else {
        i = declaration(toks, i, n, handler);
      }
    }
    if (handler['endRuleset']) {
      handler['endRuleset']();
    }
    return i;
  }

  // selector    : any+;
  // any         : [ IDENT | NUMBER | PERCENTAGE | DIMENSION | STRING
  //               | DELIM | URI | HASH | UNICODE-RANGE | INCLUDES
  //               | FUNCTION S* any* ')' | DASHMATCH | '(' S* any* ')'
  //               | '[' S* any* ']' ] S*;
  // A negative return value, rv, indicates the selector was malformed and
  // the index at which we stopped is ~rv.
  function selector(toks, i, n, allowSemi) {
    var s = i;
    // The definition of any above can be summed up as
    //   "any run of token except ('[', ']', '(', ')', ':', ';', '{', '}')
    //    or nested runs of parenthesized tokens or square bracketed tokens".
    // Spaces are significant in the selector.
    // Selector is used as (selector?) so the below looks for (any*) for
    // simplicity.
    var tok;
    // Keeping a stack pointer actually causes this to minify better since
    // ".length" and ".push" are a lo of chars.
    var brackets = [], stackLast = -1;
    for (;i < n; ++i) {
      tok = toks[i].charAt(0);
      if (tok === '[' || tok === '(') {
        brackets[++stackLast] = tok;
      } else if ((tok === ']' && brackets[stackLast] === '[') ||
                 (tok === ')' && brackets[stackLast] === '(')) {
        --stackLast;
      } else if (tok === '{' || tok === '}' || tok === ';' || tok === '@'
                 || (tok === ':' && !allowSemi)) {
        break;
      }
    }
    if (stackLast >= 0) {
      // Returns the bitwise inverse of i+1 to indicate an error in the
      // token stream so that clients can ignore it.
      i = ~(i+1);
    }
    return i;
  }

  var ident = /^-?[a-z]/i;

  function skipDeclaration(toks, i, n) {
    // TODO(felix8a): maybe skip balanced pairs of {}
    while (i < n && toks[i] !== ';' && toks[i] !== '}') { ++i; }
    return i < n && toks[i] === ';' ? i+1 : i;
  }

  // declaration : property ':' S* value;
  // property    : IDENT S*;
  // value       : [ any | block | ATKEYWORD S* ]+;
  function declaration(toks, i, n, handler) {
    var property = toks[i++];
    if (!ident.test(property)) {
      return skipDeclaration(toks, i, n);
    }
    var tok;
    if (i < n && toks[i] === ' ') { ++i; }
    if (i == n || toks[i] !== ':') {
      return skipDeclaration(toks, i, n);
    }
    ++i;
    if (i < n && toks[i] === ' ') { ++i; }

    // None of the rules we care about want atrules or blocks in value, so
    // we look for any+ but that is the same as selector but not zero-length.
    // This gets us the benefit of not emitting any value with mismatched
    // brackets.
    var s = i, e = selector(toks, i, n, false);
    if (e < 0) {
      // Skip malformed content per selector calling convention.
      e = ~e;
    } else {
      var value = [], valuelen = 0;
      for (var j = s; j < e; ++j) {
        tok = toks[j];
        if (tok !== ' ') {
          value[valuelen++] = tok;
        }
      }
      // One of the following is now true:
      // (1) e is flush with the end of the tokens as in <... style="x:y">.
      // (2) tok[e] points to a ';' in which case we need to consume the semi.
      // (3) tok[e] points to a '}' in which case we don't consume it.
      // (4) else there is bogus unparsed value content at toks[e:].
      // Allow declaration flush with end for style attr body.
      if (e < n) {  // 2, 3, or 4
        do {
          tok = toks[e];
          if (tok === ';' || tok === '}') { break; }
          // Don't emit the property if there is questionable trailing content.
          valuelen = 0;
        } while (++e < n);
        if (tok === ';') {
          ++e;
        }
      }
      if (valuelen && handler['declaration']) {
        // TODO: coerce non-keyword ident tokens to quoted strings.
        handler['declaration'](property.toLowerCase(), value);
      }
    }
    return e;
  }

  parseCssDeclarations = function(cssText, handler) {
    var toks = lexCss(cssText);
    for (var i = 0, n = toks.length; i < n;) {
      i = toks[i] !== ' ' ? declaration(toks, i, n, handler) : i+1;
    }
  };
})();

// Exports for closure compiler.

globalScope['parseCssStylesheet'] = parseCssStylesheet;
globalScope['parseCssDeclarations'] = parseCssDeclarations;


/**
 * @fileoverview
 * JavaScript support for client-side CSS sanitization.
 * The CSS property schema API is defined in CssPropertyPatterns.java which
 * is used to generate css-defs.js.
 *
 * @author mikesamuel@gmail.com
 * \@requires CSS_PROP_BIT_GLOBAL_NAME
 * \@requires CSS_PROP_BIT_HASH_VALUE
 * \@requires CSS_PROP_BIT_NEGATIVE_QUANTITY
 * \@requires CSS_PROP_BIT_PROPERTY_NAME
 * \@requires CSS_PROP_BIT_QUANTITY
 * \@requires CSS_PROP_BIT_QSTRING
 * \@requires CSS_PROP_BIT_UNRESERVED_WORD
 * \@requires CSS_PROP_BIT_URL
 * \@requires cssSchema
 * \@requires decodeCss
 * \@requires html4
 * \@requires URI
 * \@overrides window
 * \@requires parseCssStylesheet
 * \@provides sanitizeCssProperty
 * \@provides sanitizeCssSelectorList
 * \@provides sanitizeStylesheet
 * \@provides sanitizeStylesheetWithExternals
 * \@provides sanitizeMediaQuery
 */

var sanitizeCssProperty = undefined;
var sanitizeCssSelectorList = undefined;
var sanitizeStylesheet = undefined;
var sanitizeStylesheetWithExternals = undefined;
var sanitizeMediaQuery = undefined;

(function () {
  var NOEFFECT_URL = 'url("about:blank")';
  /**
   * The set of characters that need to be normalized inside url("...").
   * We normalize newlines because they are not allowed inside quoted strings,
   * normalize quote characters, angle-brackets, and asterisks because they
   * could be used to break out of the URL or introduce targets for CSS
   * error recovery.  We normalize parentheses since they delimit unquoted
   * URLs and calls and could be a target for error recovery.
   */
  var NORM_URL_REGEXP = /[\n\f\r\"\'()*<>]/g;
  /** The replacements for NORM_URL_REGEXP. */
  var NORM_URL_REPLACEMENTS = {
    '\n': '%0a',
    '\f': '%0c',
    '\r': '%0d',
    '"':  '%22',
    '\'': '%27',
    '(':  '%28',
    ')':  '%29',
    '*':  '%2a',
    '<':  '%3c',
    '>':  '%3e'
  };

  function normalizeUrl(s) {
    if ('string' === typeof s) {
      return 'url("' + s.replace(NORM_URL_REGEXP, normalizeUrlChar) + '")';
    } else {
      return NOEFFECT_URL;
    }
  }
  function normalizeUrlChar(ch) {
    return NORM_URL_REPLACEMENTS[ch];
  }

  // From RFC3986
  var URI_SCHEME_RE = new RegExp(
      '^' +
      '(?:' +
        '([^:\/?# ]+)' +         // scheme
      ':)?'
  );

  /**
   * Add values here if we want to support more URI schemes
   *
   * @type {RegExp}
   */
  var ALLOWED_URI_SCHEMES = /^(?:https?|mailto|data)$/i;

  function resolveUri(baseUri, uri) {
    if (baseUri) {
      return URI.utils.resolve(baseUri, uri);
    }
    return uri;
  }

  function safeUri(uri, prop, naiveUriRewriter) {
    if (!naiveUriRewriter) { return null; }
    var parsed = ('' + uri).match(URI_SCHEME_RE);
    if (parsed && (!parsed[1] || ALLOWED_URI_SCHEMES.test(parsed[1]))) {
      return naiveUriRewriter(uri, prop);
    } else {
      return null;
    }
  }

  function withoutVendorPrefix(ident) {
    // http://stackoverflow.com/a/5411098/20394 has a fairly extensive list
    // of vendor prefices.
    // Blink has not declared a vendor prefix distinct from -webkit-
    // and http://css-tricks.com/tldr-on-vendor-prefix-drama/ discusses
    // how Mozilla recognizes some -webkit-
    // http://wiki.csswg.org/spec/vendor-prefixes talks more about
    // cross-implementation, and lists other prefixes.
    // Note: info is duplicated in CssValidator.java
    return ident.replace(
        /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/, '');
  }

  /**
   * Given a series of normalized CSS tokens, applies a property schema, as
   * defined in CssPropertyPatterns.java, and sanitizes the tokens in place.
   * @param property a property name.
   * @param tokens as parsed by lexCss.  Modified in place.
   * @param opt_naiveUriRewriter a URI rewriter; an object with a "rewrite"
   *     function that takes a URL and returns a safe URL.
   * @param opt_baseURI a URI against which all relative URLs in tokens will
   *     be resolved.
   * @param opt_idSuffix {string} appended to all IDs to scope them.
   */
  sanitizeCssProperty = (function () {

    function unionArrays(arrs) {
      var map = {};
      for (var i = arrs.length; --i >= 0;) {
        var arr = arrs[i];
        for (var j = arr.length; --j >= 0;) {
          map[arr[j]] = ALLOWED_LITERAL;
        }
      }
      return map;
    }

    // Used as map value to avoid hasOwnProperty checks.
    var ALLOWED_LITERAL = {};

    return function sanitize(
        property, tokens, opt_naiveUriRewriter, opt_baseUri, opt_idSuffix) {

      var propertyKey = withoutVendorPrefix(property);
      var propertySchema = cssSchema[propertyKey];

      // If the property isn't recognized, elide all tokens.
      if (!propertySchema || 'object' !== typeof propertySchema) {
        tokens.length = 0;
        return;
      }

      var propBits = propertySchema['cssPropBits'];

      /**
       * Recurse to apply the appropriate function schema to the function call
       * that starts at {@code tokens[start]}.
       * @param {Array.<string>} tokens an array of CSS token that is modified
       *   in place so that all tokens involved in the function call
       *   (from {@code tokens[start]} to a close parenthesis) are folded to
       *   one token.
       * @param {number} start an index into tokens of a function token like
       *   {@code 'name('}.
       * @return the replacement function or the empty string if the function
       *   call is not both well-formed and allowed.
       */
      function sanitizeFunctionCall(tokens, start) {
        var parenDepth = 1, end = start + 1, n = tokens.length;
        while (end < n && parenDepth) {
          var token = tokens[end++];
          // Decrement if we see a close parenthesis, and increment if we
          // see a function.  Since url(...) are whole tokens, they will not
          // affect the token scanning.
          parenDepth += (token === ')' ? -1 : /^[^"']*\($/.test(token));
        }
        // Allow error-recovery from unclosed functions by ignoring the call and
        // so allowing resumption at the next ';'.
        if (!parenDepth) {
          var fnToken = tokens[start].toLowerCase();
          var bareFnToken = withoutVendorPrefix(fnToken);
          // Cut out the originals, so the caller can step by one token.
          var fnTokens = tokens.splice(start, end - start, '');
          var fns = propertySchema['cssFns'];
          // Look for a function that matches the name.
          for (var i = 0, nFns = fns.length; i < nFns; ++i) {
            if (fns[i].substring(0, bareFnToken.length) == bareFnToken) {
              fnTokens[0] = fnTokens[fnTokens.length - 1] = '';
              // Recurse and sanitize the function parameters.
              sanitize(
                fns[i],
                // The actual parameters to the function.
                fnTokens,
                opt_naiveUriRewriter, opt_baseUri);
              // Reconstitute the function from its parameter tokens.
              return fnToken + fnTokens.join(' ') + ')';
            }
          }
        }
        return '';
      }

      // Used to determine whether to treat quoted strings as URLs or
      // plain text content, and whether unrecognized keywords can be quoted
      // to treat ['Arial', 'Black'] equivalently to ['"Arial Black"'].
      var stringDisposition =
        propBits & (CSS_PROP_BIT_URL | CSS_PROP_BIT_UNRESERVED_WORD);
      // Used to determine what to do with unreserved words.
      var identDisposition =
        propBits & (CSS_PROP_BIT_GLOBAL_NAME | CSS_PROP_BIT_PROPERTY_NAME);

      // Used to join unquoted keywords into a single quoted string.
      var lastQuoted = NaN;
      var i = 0, k = 0;
      for (;i < tokens.length; ++i) {
        // Has the effect of normalizing hex digits, keywords,
        // and function names.
        var token = tokens[i].toLowerCase();
        var cc = token.charCodeAt(0), cc1, cc2, isnum1, isnum2, end;
        var litGroup, litMap;
        token = (

          // Strip out spaces.  Normally cssparser.js dumps these, but we
          // strip them out in case the content doesn't come via cssparser.js.
          (cc === ' '.charCodeAt(0)) ? ''
          : (cc === '"'.charCodeAt(0)) ? (  // Quoted string.
            (stringDisposition === CSS_PROP_BIT_URL)
            ? (opt_naiveUriRewriter
               // Sanitize and convert to url("...") syntax.
               // Treat url content as case-sensitive.
               ? (normalizeUrl(
                   // Rewrite to a safe URI.
                   safeUri(
                     // Convert to absolute URL
                     resolveUri(
                       opt_baseUri,
                       // Strip off quotes
                       decodeCss(tokens[i].substring(1, token.length - 1))),
                     propertyKey,
                     opt_naiveUriRewriter)))
              : '')
            : ((propBits & CSS_PROP_BIT_QSTRING)
               // Ambiguous when more than one bit set in disposition.
               && !(stringDisposition & (stringDisposition - 1)))
            ? token
            // Drop if quoted strings not allowed.
            : ''
          )

          // inherit is always allowed.
          : token === 'inherit'
          ? token

          : (
            litGroup = propertySchema['cssLitGroup'],
            litMap = (litGroup
                      ? (propertySchema['cssLitMap']
                         // Lazily compute the union from litGroup.
                         || (propertySchema['cssLitMap'] =
                             unionArrays(litGroup)))
                      : ALLOWED_LITERAL),  // A convenient empty object.
            (litMap[withoutVendorPrefix(token)] === ALLOWED_LITERAL)
          )
          // Token is in the literal map or matches extra.
          ? token

          // Preserve hash color literals if allowed.
          : (cc === '#'.charCodeAt(0) && /^#(?:[0-9a-f]{3}){1,2}$/.test(token))
          ? (propBits & CSS_PROP_BIT_HASH_VALUE ? token : '')

          : ('0'.charCodeAt(0) <= cc && cc <= '9'.charCodeAt(0))
          // A number starting with a digit.
          ? ((propBits & CSS_PROP_BIT_QUANTITY) ? token : '')

          // Normalize quantities so they don't start with a '.' or '+' sign and
          // make sure they all have an integer component so can't be confused
          // with a dotted identifier.
          // This can't be done in the lexer since ".4" is a valid rule part.
          : (cc1 = token.charCodeAt(1),
             cc2 = token.charCodeAt(2),
             isnum1 = '0'.charCodeAt(0) <= cc1 && cc1 <= '9'.charCodeAt(0),
             isnum2 = '0'.charCodeAt(0) <= cc2 && cc2 <= '9'.charCodeAt(0),
             // +.5 -> 0.5 if allowed.
             (cc === '+'.charCodeAt(0)
              && (isnum1 || (cc1 === '.'.charCodeAt(0) && isnum2))))
          ? ((propBits & CSS_PROP_BIT_QUANTITY)
            ? ((isnum1 ? '' : '0') + token.substring(1))
            : '')

          // -.5 -> -0.5 if allowed otherwise -> 0 if quantities allowed.
          : (cc === '-'.charCodeAt(0)
             && (isnum1 || (cc1 === '.'.charCodeAt(0) && isnum2)))
            ? ((propBits & CSS_PROP_BIT_NEGATIVE_QUANTITY)
               ? ((isnum1 ? '-' : '-0') + token.substring(1))
               : ((propBits & CSS_PROP_BIT_QUANTITY) ? '0' : ''))

          // .5 -> 0.5 if allowed.
          : (cc === '.'.charCodeAt(0) && isnum1)
          ? ((propBits & CSS_PROP_BIT_QUANTITY) ? '0' + token : '')

          // Handle url("...") by rewriting the body.
          : ('url("' === token.substring(0, 5))
          ? ((opt_naiveUriRewriter && (propBits & CSS_PROP_BIT_URL))
             ? normalizeUrl(safeUri(resolveUri(opt_baseUri,
                  tokens[i].substring(5, token.length - 2)),
                  propertyKey,
                  opt_naiveUriRewriter))
             : '')

          // Handle func(...) by recursing.
          // Functions start at a token like "name(" and end with a ")" taking
          // into account nesting.
          : (token.charAt(token.length-1) === '(')
          ? sanitizeFunctionCall(tokens, i)

          : (identDisposition
             && /^-?[a-z_][\w\-]*$/.test(token) && !/__$/.test(token))
          ? (opt_idSuffix && identDisposition === CSS_PROP_BIT_GLOBAL_NAME
             ? tokens[i] + opt_idSuffix  // use original token, not lowercased
             : (identDisposition === CSS_PROP_BIT_PROPERTY_NAME
                && cssSchema[token]
                && 'number' === typeof cssSchema[token].cssPropBits)
             ? token
             : '')

          : (/^\w+$/.test(token)
             && stringDisposition === CSS_PROP_BIT_UNRESERVED_WORD
             && (propBits & CSS_PROP_BIT_QSTRING))
          // Quote unrecognized keywords so font names like
          //    Arial Bold
          // ->
          //    "Arial Bold"
          ? (lastQuoted+1 === k
             // If the last token was also a keyword that was quoted, then
             // combine this token into that.
             ? (tokens[lastQuoted] = (
                  tokens[lastQuoted].substring(0, tokens[lastQuoted].length-1)
                  + ' ' + token + '"'),
                token = '')
             : (lastQuoted = k, '"' + token + '"'))

          // Disallowed.
          : '');
        if (token) {
          tokens[k++] = token;
        }
      }
      // For single URL properties, if the URL failed to pass the sanitizer,
      // then just drop it.
      if (k === 1 && tokens[0] === NOEFFECT_URL) { k = 0; }
      tokens.length = k;
    };
  })();

  // Note, duplicated in CssRewriter.java
  // Constructed from
  //    https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
  //    https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
  //    http://dev.w3.org/csswg/selectors4/
  var PSEUDO_SELECTOR_WHITELIST =
    new RegExp(
        '^(active|after|before|blank|checked|default|disabled'
        + '|drop|empty|enabled|first|first-child|first-letter'
        + '|first-line|first-of-type|fullscreen|focus|hover'
        + '|in-range|indeterminate|invalid|last-child|last-of-type'
        + '|left|link|only-child|only-of-type|optional|out-of-range'
        + '|placeholder-shown|read-only|read-write|required|right'
        + '|root|scope|user-error|valid|visited'
        + ')$');

  // Set of punctuation tokens that are child/sibling selectors.
  var COMBINATOR = {};
  COMBINATOR['>'] = COMBINATOR['+'] = COMBINATOR['~'] = COMBINATOR;

  /**
   * Given a series of tokens, returns a list of sanitized selectors.
   * @param {Array.<string>} selectors In the form produced by csslexer.js.
   * @param {{
   *     containerClass: ?string,
   *     idSuffix: string,
   *     tagPolicy: function(string, Array.<string>): ?Array.<string>,
   *     virtualizeAttrName: ?function(string, string): ?string
   *   }} virtualization An object like <pre<{
   *   containerClass: class name prepended to all selectors to scope them (if
   *       not null)
   *   idSuffix: appended to all IDs to scope them
   *   tagPolicy: As in html-sanitizer, used for rewriting element names.
   *   virtualizeAttrName: Rewrite a single attribute name for attribute
   *       selectors, or return null if not possible. Should be consistent
   *       with tagPolicy if possible.
   * }</pre>
   *    If containerClass is {@code "sfx"} and idSuffix is {@code "-sfx"}, the
   *    selector
   *    {@code ["a", "#foo", " ", "b", ".bar"]} will be namespaced to
   *    {@code [".sfx", " ", "a", "#foo-sfx", " ", "b", ".bar"]}.
   * @param {function(Array.<string>): boolean} opt_onUntranslatableSelector
   *     When a selector cannot be translated, this function is called with the
   *     non-whitespace/comment tokens comprising the selector and returns a
   *     value indicating whether to continue processing the selector list.
   *     If it returns falsey, then processing is aborted and null is returned.
   *     If not present or it returns truthy, then the complex selector is
   *     dropped from the selector list.
   * @return {Array.<string>}? an array of sanitized selectors.
   *    Null when the untraslatable compound selector handler aborts processing.
   */
  sanitizeCssSelectorList = function(
      selectors, virtualization, opt_onUntranslatableSelector) {
    var containerClass = virtualization.containerClass;
    var idSuffix = virtualization.idSuffix;
    var tagPolicy = virtualization.tagPolicy;
    var sanitized = [];

    // Remove any spaces that are not operators.
    var k = 0, i, inBrackets = 0, tok;
    for (i = 0; i < selectors.length; ++i) {
      tok = selectors[i];

      if (
            (tok == '(' || tok == '[') ? (++inBrackets, true)
          : (tok == ')' || tok == ']') ? (inBrackets && --inBrackets, true)
          : !(selectors[i] == ' '
              && (inBrackets || COMBINATOR[selectors[i-1]] === COMBINATOR
                  || COMBINATOR[selectors[i+1]] === COMBINATOR))
        ) {
        selectors[k++] = selectors[i];
      }
    }
    selectors.length = k;

    // Split around commas.  If there is an error in one of the comma separated
    // bits, we throw the whole away, but the failure of one selector does not
    // affect others except that opt_onUntranslatableSelector allows one to
    // treat the entire output as unusable.
    var n = selectors.length, start = 0;
    for (i = 0; i < n; ++i) {
      if (selectors[i] === ',') {  // TODO: ignore ',' inside brackets.
        if (!processComplexSelector(start, i)) { return null; }
        start = i+1;
      }
    }
    if (!processComplexSelector(start, n)) { return null; }


    function processComplexSelector(start, end) {
      // Space around commas is not an operator.
      if (selectors[start] === ' ') { ++start; }
      if (end-1 !== start && selectors[end] === ' ') { --end; }

      // Split the selector into element selectors, content around
      // space (ancestor operator) and '>' (descendant operator).
      var out = [];
      var lastOperator = start;
      var valid = true;  // True iff out contains a valid complex selector.
      for (var i = start; valid && i < end; ++i) {
        var tok = selectors[i];
        if (COMBINATOR[tok] === COMBINATOR || tok === ' ') {
          // We've found the end of a single link in the selector chain.
          if (!processCompoundSelector(lastOperator, i, tok)) {
            valid = false;
          } else {
            lastOperator = i+1;
          }
        }
      }
      if (!processCompoundSelector(lastOperator, end, '')) {
        valid = false;
      }

      function processCompoundSelector(start, end, combinator) {
        // Split the element selector into four parts.
        // DIV.foo#bar[href]:hover
        //    ^       ^     ^
        // el classes attrs pseudo
        var element, classId, attrs, pseudoSelector,
            tok,  // The current token
            // valid implies the parts above comprise a sanitized selector.
            valid = true;
        element = '';
        if (start < end) {
          tok = selectors[start];
          if (tok === '*') {
            ++start;
            element = tok;
          } else if (/^[a-zA-Z]/.test(tok)) {  // is an element selector
            var decision = tagPolicy(tok.toLowerCase(), []);
            if (decision) {
              if ('tagName' in decision) {
                tok = decision['tagName'];
              }
              ++start;
              element = tok;
            }
          }
        }
        classId = '';
        attrs = '';
        pseudoSelector = '';
        for (;valid && start < end; ++start) {
          tok = selectors[start];
          if (tok.charAt(0) === '#') {
            if (/^#_|__$|[^\w#:\-]/.test(tok)) {
              valid = false;
            } else {
              // Rewrite ID elements to include the suffix.
              classId += tok + idSuffix;
            }
          } else if (tok === '.') {
            if (++start < end
                && /^[0-9A-Za-z:_\-]+$/.test(tok = selectors[start])
                && !/^_|__$/.test(tok)) {
              classId += '.' + tok;
            } else {
              valid = false;
            }
          } else if (start + 1 < end && selectors[start] === '[') {
            ++start;
            var vAttr = selectors[start++].toLowerCase();
            // Schema lookup for type information
            var atype = html4.ATTRIBS[element + '::' + vAttr];
            if (atype !== +atype) { atype = html4.ATTRIBS['*::' + vAttr]; }

            var rAttr;
            // Consult policy
            // TODO(kpreid): Making this optional is a kludge to avoid changing
            // the public interface until we have a more well-structured design.
            if (virtualization.virtualizeAttrName) {
              rAttr = virtualization.virtualizeAttrName(element, vAttr);
              if (typeof rAttr !== 'string') {
                // rejected
                valid = false;
                rAttr = vAttr;
              }
              // don't reject even if not in schema
              if (valid && atype !== +atype) {
                atype = html4.atype['NONE'];
              }
            } else {
              rAttr = vAttr;
              if (atype !== +atype) {  // not permitted according to schema
                valid = false;
              }
            }

            var op = '', value = '', ignoreCase = false;
            if (/^[~^$*|]?=$/.test(selectors[start])) {
              op = selectors[start++];
              value = selectors[start++];
              // Quote identifier values.
              if (/^[0-9A-Za-z:_\-]+$/.test(value)) {
                value = '"' + value + '"';
              } else if (value === ']') {
                value = '""';
                --start;
              }
              // Reject unquoted values.
              if (!/^"([^\"\\]|\\.)*"$/.test(value)) {
                valid = false;
              }
              ignoreCase = selectors[start] === "i";
              if (ignoreCase) { ++start; }
            }
            if (selectors[start] !== ']') {
              ++start;
              valid = false;
            }
            // TODO: replace this with a lookup table that also provides a
            // function from operator and value to testable value.
            switch (atype) {
            case html4.atype['CLASSES']:
            case html4.atype['LOCAL_NAME']:
            case html4.atype['NONE']:
              break;
            case html4.atype['GLOBAL_NAME']:
            case html4.atype['ID']:
            case html4.atype['IDREF']:
              if ((op === '=' || op === '~=' || op === '$=')
                  && value != '""' && !ignoreCase) {
                // The suffix is case-sensitive, so we can't translate case
                // ignoring matches.
                value = '"'
                  + value.substring(1, value.length-1) + idSuffix
                  + '"';
              } else if (op === '|=' || op === '') {
                // Ok.  a|=b -> a == b || a.startsWith(b + "-") and since we
                // use "-" to separate the suffix from the identifier, we can
                // allow this through unmodified.
                // Existence checks are also ok.
              } else {
                // Can't correctly handle prefix and substring operators
                // without leaking information about the suffix.
                valid = false;
              }
              break;
            case html4.atype['URI']:
            case html4.atype['URI_FRAGMENT']:
              // URIs are rewritten, so we can't meanginfully translate URI
              // selectors besides the common a[href] one that is used to
              // distinguish links from naming anchors.
              if (op !== '') { valid = false; }
              break;
            // TODO: IDREFS
            default:
              valid = false;
            }
            if (valid) {
              attrs += '[' + rAttr.replace(/[^\w-]/g, '\\$&') + op + value +
                  (ignoreCase ? ' i]' : ']');
            }
          } else if (start < end && selectors[start] === ':') {
            tok = selectors[++start];
            if (PSEUDO_SELECTOR_WHITELIST.test(tok)) {
              pseudoSelector += ':' + tok;
            } else {
              break;
            }
          } else {
            break;  // Unrecognized token.
          }
        }
        if (start !== end) {  // Tokens not consumed.
          valid = false;
        }
        if (valid) {
          // ':' is allowed in identifiers, but is also the
          // pseudo-selector separator, so ':' in preceding parts needs to
          // be escaped.
          var selector = (element + classId).replace(/[^ .*#\w-]/g, '\\$&')
              + attrs + pseudoSelector + combinator;
          if (selector) { out.push(selector); }
        }
        return valid;
      }

      if (valid) {
        if (out.length) {
          var safeSelector = out.join('');

          // Namespace the selector so that it only matches under
          // a node with suffix in its CLASS attribute.
          if (containerClass !== null) {
            safeSelector = '.' + containerClass + ' ' + safeSelector;
          }

          sanitized.push(safeSelector);
        }  // else nothing there.
        return true;
      } else {
        return !opt_onUntranslatableSelector
          || opt_onUntranslatableSelector(selectors.slice(start, end));
      }
    }
    return sanitized;
  };

  (function () {
    var MEDIA_TYPE =
       '(?:'
       + 'all|aural|braille|embossed|handheld|print'
       + '|projection|screen|speech|tty|tv'
       + ')';

    // A white-list of media features extracted from the "Pseudo-BNF" in
    // http://dev.w3.org/csswg/mediaqueries4/#media1 and
    // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries
    var MEDIA_FEATURE =
       '(?:'
       + '(?:min-|max-)?'
       + '(?:' + (
           '(?:device-)?'
         + '(?:aspect-ratio|height|width)'
         + '|color(?:-index)?'
         + '|monochrome'
         + '|orientation'
         + '|resolution'
       )
       + ')'
       + '|grid'
       + '|hover'
       + '|luminosity'
       + '|pointer'
       + '|scan'
       + '|script'
       + ')';

    var LENGTH_UNIT = '(?:p[cxt]|[cem]m|in|dpi|dppx|dpcm|%)';

    var CSS_VALUE =
       '-?(?:'
       + '[a-z]\\w+(?:-\\w+)*'  // An identifier
       // A length or scalar quantity, or a rational number.
       // dev.w3.org/csswg/mediaqueries4/#values introduces a ratio value-type
       // to allow matching aspect ratios like "4 / 3".
       + '|\\d+(?: / \\d+|(?:\\.\\d+)?' + LENGTH_UNIT + '?)'
       + ')';

    var MEDIA_EXPR =
       '\\( ' + MEDIA_FEATURE + ' (?:' + ': ' + CSS_VALUE + ' )?\\)';

    var MEDIA_QUERY =
       '(?:'
       + '(?:(?:(?:only|not) )?' + MEDIA_TYPE + '|' + MEDIA_EXPR + ')'
       // We use 'and ?' since 'and(' is a single CSS function token while
       // 'and (' parses to two separate tokens -- IDENT "and", DELIM "(".
       + '(?: and ?' + MEDIA_EXPR + ')*'
       + ')';

    var STARTS_WITH_KEYWORD_REGEXP = /^\w/;

    var MEDIA_QUERY_LIST_REGEXP = new RegExp(
      '^' + MEDIA_QUERY + '(?: , ' + MEDIA_QUERY + ')*' + '$',
      'i'
    );

    /**
     * Sanitizes a media query as defined in
     * http://dev.w3.org/csswg/mediaqueries4/#syntax
     * <blockquote>
     * Media Queries allow authors to adapt the style applied to a document
     * based on the environment the document is being rendered in.
     * </blockquote>
     *
     * @param {Array.<string>} cssTokens an array of tokens of the kind produced
     *   by cssLexers.
     * @return {string} a CSS media query.  This may be the empty string, or if
     *   the input is invalid, then a query that is always false.
     */
    sanitizeMediaQuery = function (cssTokens) {
      cssTokens = cssTokens.slice();
      // Strip out space tokens.
      var nTokens = cssTokens.length, k = 0;
      for (var i = 0; i < nTokens; ++i) {
        var tok = cssTokens[i];
        if (tok != ' ') { cssTokens[k++] = tok; }
      }
      cssTokens.length = k;
      var css = cssTokens.join(' ');
      css = (
        !css.length ? ''  // Always true per the spec.
        : !(MEDIA_QUERY_LIST_REGEXP.test(css)) ? 'not all'  // Always false.
        // Emit as-is if it starts with 'only', 'not' or a media type.
        : STARTS_WITH_KEYWORD_REGEXP.test(css) ? css
        : 'not all , ' + css  // Not ambiguous with a URL.
      );
      return css;
    };
  }());

  (function () {

    /**
     * Extracts a url out of an at-import rule of the form:
     *   \@import "mystyle.css";
     *   \@import url("mystyle.css");
     *
     * Returns null if no valid url was found.
     */
    function cssParseUri(candidate) {
      var string1 = /^\s*["]([^"]*)["]\s*$/;
      var string2 = /^\s*[']([^']*)[']\s*$/;
      var url1 = /^\s*url\s*[(]["]([^"]*)["][)]\s*$/;
      var url2 = /^\s*url\s*[(][']([^']*)['][)]\s*$/;
      // Not officially part of the CSS2.1 grammar
      // but supported by Chrome
      var url3 = /^\s*url\s*[(]([^)]*)[)]\s*$/;
      var match;
      if ((match = string1.exec(candidate))) {
        return match[1];
      } else if ((match = string2.exec(candidate))) {
        return match[1];
      } else if ((match = url1.exec(candidate))) {
        return match[1];
      } else if ((match = url2.exec(candidate))) {
        return match[1];
      } else if ((match = url3.exec(candidate))) {
        return match[1];
      }
      return null;
    }

    /**
     * @param {string} baseUri a string against which relative urls are
     *    resolved.
     * @param {string} cssText a string containing a CSS stylesheet.
     * @param {{
     *     containerClass: ?string,
     *     idSuffix: string,
     *     tagPolicy: function(string, Array.<string>): ?Array.<string>,
     *     virtualizeAttrName: ?function(string, string): ?string
     *   }} virtualization An object like <pre<{
     *   containerClass: class name prepended to all selectors to scope them (if
     *       not null)
     *   idSuffix: appended to all IDs to scope them
     *   tagPolicy: As in html-sanitizer, used for rewriting element names.
     *   virtualizeAttrName: Rewrite a single attribute name for attribute
     *       selectors, or return null if not possible. Should be consistent
     *       with tagPolicy if possible. Optional.
     * }</pre>
     *    If containerClass is {@code "sfx"} and idSuffix is {@code "-sfx"}, the
     *    selector
     *    {@code ["a", "#foo", " ", "b", ".bar"]} will be namespaced to
     *    {@code [".sfx", " ", "a", "#foo-sfx", " ", "b", ".bar"]}.
     * @param {function(string, string)} naiveUriRewriter maps URLs of media
     *    (images, sounds) that appear as CSS property values to sanitized
     *    URLs or null if the URL should not be allowed as an external media
     *    file in sanitized CSS.
     * @param {undefined|function({toString: function ():string}, boolean)}
     *     continuation
     *     callback that receives the result of loading imported CSS.
     *     The callback is called with
     *     (cssContent : function ():string, moreToCome : boolean)
     *     where cssContent is the CSS at the imported URL, and moreToCome is
     *     true when the external URL itself loaded other external URLs.
     *     If the output of the original call is stringified when moreToCome is
     *     false, then it will be complete.
     * @param {Array.<number>} opt_importCount the number of imports that need
     *     to be satisfied before there is no more pending content.
     * @return {{result:{toString:function ():string},moreToCome:boolean}}
     *     the CSS text, and a flag that indicates whether there are pending
     *     imports that will be passed to continuation.
     */
    function sanitizeStylesheetInternal(
        baseUri, cssText, virtualization, naiveUriRewriter, naiveUriFetcher,
        continuation, opt_importCount) {
      var safeCss = void 0;
      // Return a result with moreToCome===true when the last import has been
      // sanitized.
      var importCount = opt_importCount || [0];
      // A stack describing the { ... } regions.
      // Null elements indicate blocks that should not be emitted.
      var blockStack = [];
      // True when the content of the current block should be left off safeCss.
      var elide = false;
      parseCssStylesheet(
          cssText,
          {
            'startStylesheet': function () {
              safeCss = [];
            },
            'endStylesheet': function () {
            },
            'startAtrule': function (atIdent, headerArray) {
              if (elide) {
                atIdent = null;
              } else if (atIdent === '@media') {
                safeCss.push('@media', ' ', sanitizeMediaQuery(headerArray));
              } else if (atIdent === '@keyframes'
                         || atIdent === '@-webkit-keyframes') {
                var animationId = headerArray[0];
                if (headerArray.length === 1
                    && !/__$|[^\w\-]/.test(animationId)) {
                  safeCss.push(
                      atIdent, ' ', animationId + virtualization.idSuffix);
                  atIdent = '@keyframes';
                } else {
                  atIdent = null;
                }
              } else {
                if (atIdent === '@import' && headerArray.length > 0) {
                  atIdent = null;
                  if ('function' === typeof continuation) {
                    var mediaQuery = sanitizeMediaQuery(headerArray.slice(1));
                    if (mediaQuery !== 'not all') {
                      ++importCount[0];
                      var placeholder = [];
                      safeCss.push(placeholder);
                      var cssUrl = safeUri(
                          resolveUri(baseUri, cssParseUri(headerArray[0])),
                          function(result) {
                            var sanitized = sanitizeStylesheetInternal(
                                cssUrl, result.html, virtualization,
                                naiveUriRewriter, naiveUriFetcher,
                                continuation, importCount);
                            --importCount[0];
                            var safeImportedCss = mediaQuery
                              ? {
                                toString: function () {
                                  return (
                                    '@media ' + mediaQuery + ' {'
                                    + sanitized.result + '}'
                                  );
                                }
                              }
                              : sanitized.result;
                            placeholder[0] = safeImportedCss;
                            continuation(safeImportedCss, !!importCount[0]);
                          },
                          naiveUriFetcher);
                    }
                  } else {
                    // TODO: Use a logger instead.
                    if (window.console) {
                      window.console.log(
                          '@import ' + headerArray.join(' ') + ' elided');
                    }
                  }
                }
              }
              elide = !atIdent;
              blockStack.push(atIdent);
            },
            'endAtrule': function () {
              blockStack.pop();
              if (!elide) {
                safeCss.push(';');
              }
              checkElide();
            },
            'startBlock': function () {
              // There are no bare blocks in CSS, so we do not change the
              // block stack here, but instead in the events that bracket
              // blocks.
              if (!elide) {
                safeCss.push('{');
              }
            },
            'endBlock': function () {
              if (!elide) {
                safeCss.push('}');
                elide = true;  // skip any semicolon from endAtRule.
              }
            },
            'startRuleset': function (selectorArray) {
              if (!elide) {
                var selector = void 0;
                if (blockStack[blockStack.length - 1] === '@keyframes') {
                  // Allow [from | to | <percentage>]
                  selector = selectorArray.join(' ')
                    .match(/^ *(?:from|to|\d+(?:\.\d+)?%) *(?:, *(?:from|to|\d+(?:\.\d+)?%) *)*$/i);
                  elide = !selector;
                  if (selector) { selector = selector[0].replace(/ +/g, ''); }
                } else {
                  var selectors = sanitizeCssSelectorList(
                      selectorArray, virtualization);
                  if (!selectors || !selectors.length) {
                    elide = true;
                  } else {
                    selector = selectors.join(', ');
                  }
                }
                if (!elide) {
                  safeCss.push(selector, '{');
                }
              }
              blockStack.push(null);
            },
            'endRuleset': function () {
              blockStack.pop();
              if (!elide) {
                safeCss.push('}');
              }
              checkElide();
            },
            'declaration': function (property, valueArray) {
              if (!elide) {
                var isImportant = false;
                var nValues = valueArray.length;
                if (nValues >= 2
                    && valueArray[nValues - 2] === '!'
                    && valueArray[nValues - 1].toLowerCase() === 'important') {
                  isImportant = true;
                  valueArray.length -= 2;
                }
                sanitizeCssProperty(
                    property, valueArray, naiveUriRewriter, baseUri,
                    virtualization.idSuffix);
                if (valueArray.length) {
                  safeCss.push(
                      property, ':', valueArray.join(' '),
                      isImportant ? ' !important;' : ';');
                }
              }
            }
          });
      function checkElide() {
        elide = blockStack.length && blockStack[blockStack.length-1] === null;
      }
      return {
        result : { toString: function () { return safeCss.join(''); } },
        moreToCome : !!importCount[0]
      };
    }

    sanitizeStylesheet = function (
        baseUri, cssText, virtualization, naiveUriRewriter) {
      return sanitizeStylesheetInternal(
          baseUri, cssText, virtualization,
          naiveUriRewriter, undefined, undefined).result.toString();
    };

    sanitizeStylesheetWithExternals = function (
        baseUri, cssText, virtualization, naiveUriRewriter, naiveUriFetcher,
        continuation) {
      return sanitizeStylesheetInternal(
          baseUri, cssText, virtualization,
          naiveUriRewriter, naiveUriFetcher, continuation);
    };
  })();
})();

// Exports for closure compiler.

globalScope['sanitizeCssProperty'] = sanitizeCssProperty;
globalScope['sanitizeCssSelectorList'] = sanitizeCssSelectorList;
globalScope['sanitizeStylesheet'] = sanitizeStylesheet;
globalScope['sanitizeMediaQuery'] = sanitizeMediaQuery;
