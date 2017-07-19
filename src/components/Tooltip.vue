<script>
// https://github.com/vue-bulma/tooltip
import classNames from 'classnames'

export default {
  name: 'tooltip',
  abstract: true,

  props: {
    type: String,
    size: {
      type: String,
      default: 'medium',
      validator: function (value) { return ['small', 'medium', 'large'].includes(value) }
    },
    always: Boolean,
    noAnimate: Boolean,
    rounded: Boolean,
    label: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },

  render () {
    let children = this.$slots.default
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(c => c.tag)
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    const rawChild = children[0]

    rawChild.data.attrs = rawChild.data.attrs || {}
    Object.assign(rawChild.data.attrs, {
      'aria-label': this.label
    })

    rawChild.data.class = Array.isArray(rawChild.data.class) ? rawChild.data.class : [rawChild.data.class]
    rawChild.data.class.push(classNames(
      'tooltip',
      `tooltip--${this.placement}`,
      {
        [`tooltip--${this.type}`]: this.type,
        [`tooltip--${this.size}`]: this.size,
        'tooltip--rounded': this.rounded,
        'tooltip--always': this.always,
        'tooltip--no-animate': this.noAnimate
      }
    ))

    return rawChild
  },

  watch: {
    label (val) {
      this.$el.setAttribute('aria-label', val)
    }
  }
}
</script>


<style>
/*-------------------------------------*	HINT.css - A CSS tooltip library
\*-------------------------------------*/
/**
 * HINT.css is a tooltip library made in pure CSS.
 *
 * Source: https://github.com/chinchang/hint.css
 * Demo: http://kushagragour.in/lab/hint/
 *
 * Release under The MIT License
 *
 */
/**
 * source: hint-core.scss
 *
 * Defines the basic styling for the tooltip.
 * Each tooltip is made of 2 parts:
 * 	1) body (:after)
 * 	2) arrow (:before)
 *
 * Classes added:
 * 	1) hint
 */
[class*="tooltip--"] {
  position: relative;
  display: inline-block;
  /**
	 * tooltip arrow
	 */
  /**
	 * tooltip body
	 */ }
  [class*="tooltip--"]:before, [class*="tooltip--"]:after {
    position: absolute;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: hidden;
    opacity: 0;
    z-index: 1000000;
    pointer-events: none;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    transition: 0.3s ease;
    -webkit-transition-delay: 0ms;
    -moz-transition-delay: 0ms;
    transition-delay: 0ms; }
  [class*="tooltip--"]:hover:before, [class*="tooltip--"]:hover:after {
    visibility: visible;
    opacity: 1; }
  [class*="tooltip--"]:hover:before, [class*="tooltip--"]:hover:after {
    -webkit-transition-delay: 100ms;
    -moz-transition-delay: 100ms;
    transition-delay: 100ms; }
  [class*="tooltip--"]:before {
    content: '';
    position: absolute;
    background: transparent;
    border: 6px solid transparent;
    z-index: 1000001; }
  [class*="tooltip--"]:after {
    background: #383838;
    color: white;
    padding: 8px 10px;
    font-size: 12px;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    line-height: 12px;
    white-space: nowrap; }
  [class*="tooltip--"][aria-label]:after {
    content: attr(aria-label); }
  [class*="tooltip--"][data-hint]:after {
    content: attr(data-hint); }

[aria-label='']:before, [aria-label='']:after,
[data-hint='']:before,
[data-hint='']:after {
  display: none !important; }

/**
 * source: hint-position.scss
 *
 * Defines the positoning logic for the tooltips.
 *
 * Classes added:
 * 	1) hint--top
 * 	2) hint--bottom
 * 	3) hint--left
 * 	4) hint--right
 */
/**
 * set default color for tooltip arrows
 */
.tooltip--top-left:before {
  border-top-color: #383838; }

.tooltip--top-right:before {
  border-top-color: #383838; }

.tooltip--top:before {
  border-top-color: #383838; }

.tooltip--bottom-left:before {
  border-bottom-color: #383838; }

.tooltip--bottom-right:before {
  border-bottom-color: #383838; }

.tooltip--bottom:before {
  border-bottom-color: #383838; }

.tooltip--left:before {
  border-left-color: #383838; }

.tooltip--right:before {
  border-right-color: #383838; }

/**
 * top tooltip
 */
.tooltip--top:before {
  margin-bottom: -11px; }

.tooltip--top:before, .tooltip--top:after {
  bottom: 100%;
  left: 50%; }

.tooltip--top:before {
  left: calc(50% - 6px); }

.tooltip--top:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%); }

.tooltip--top:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--top:hover:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px); }

/**
 * bottom tooltip
 */
.tooltip--bottom:before {
  margin-top: -11px; }

.tooltip--bottom:before, .tooltip--bottom:after {
  top: 100%;
  left: 50%; }

.tooltip--bottom:before {
  left: calc(50% - 6px); }

.tooltip--bottom:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%); }

.tooltip--bottom:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--bottom:hover:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px); }

/**
 * right tooltip
 */
.tooltip--right:before {
  margin-left: -11px;
  margin-bottom: -6px; }

.tooltip--right:after {
  margin-bottom: -14px; }

.tooltip--right:before, .tooltip--right:after {
  left: 100%;
  bottom: 50%; }

.tooltip--right:hover:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px); }

.tooltip--right:hover:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px); }

/**
 * left tooltip
 */
.tooltip--left:before {
  margin-right: -11px;
  margin-bottom: -6px; }

.tooltip--left:after {
  margin-bottom: -14px; }

.tooltip--left:before, .tooltip--left:after {
  right: 100%;
  bottom: 50%; }

.tooltip--left:hover:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px); }

.tooltip--left:hover:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px); }

/**
 * top-left tooltip
 */
.tooltip--top-left:before {
  margin-bottom: -11px; }

.tooltip--top-left:before, .tooltip--top-left:after {
  bottom: 100%;
  left: 50%; }

.tooltip--top-left:before {
  left: calc(50% - 6px); }

.tooltip--top-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%); }

.tooltip--top-left:after {
  margin-left: 12px; }

.tooltip--top-left:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--top-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px); }

/**
 * top-right tooltip
 */
.tooltip--top-right:before {
  margin-bottom: -11px; }

.tooltip--top-right:before, .tooltip--top-right:after {
  bottom: 100%;
  left: 50%; }

.tooltip--top-right:before {
  left: calc(50% - 6px); }

.tooltip--top-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0); }

.tooltip--top-right:after {
  margin-left: -12px; }

.tooltip--top-right:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--top-right:hover:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

/**
 * bottom-left tooltip
 */
.tooltip--bottom-left:before {
  margin-top: -11px; }

.tooltip--bottom-left:before, .tooltip--bottom-left:after {
  top: 100%;
  left: 50%; }

.tooltip--bottom-left:before {
  left: calc(50% - 6px); }

.tooltip--bottom-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%); }

.tooltip--bottom-left:after {
  margin-left: 12px; }

.tooltip--bottom-left:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--bottom-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px); }

/**
 * bottom-right tooltip
 */
.tooltip--bottom-right:before {
  margin-top: -11px; }

.tooltip--bottom-right:before, .tooltip--bottom-right:after {
  top: 100%;
  left: 50%; }

.tooltip--bottom-right:before {
  left: calc(50% - 6px); }

.tooltip--bottom-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0); }

.tooltip--bottom-right:after {
  margin-left: -12px; }

.tooltip--bottom-right:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--bottom-right:hover:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

/**
 * source: hint-sizes.scss
 *
 * Defines width restricted tooltips that can span
 * across multiple lines.
 *
 * Classes added:
 * 	1) hint--small
 * 	2) hint--medium
 * 	3) hint--large
 *
 */
.tooltip--small:after,
.tooltip--medium:after,
.tooltip--large:after {
  white-space: normal;
  line-height: 1.4em;
  word-wrap: break-word; }

.tooltip--small:after {
  width: 80px; }

.tooltip--medium:after {
  width: 150px; }

.tooltip--large:after {
  width: 300px; }

/**
 * source: hint-theme.scss
 *
 * Defines basic theme for tooltips.
 *
 */
[class*="tooltip--"] {
  /**
	 * tooltip body
	 */ }
  [class*="tooltip--"]:after {
    text-shadow: 0 -1px 0px #383838;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); }

/**
 * source: hint-color-types.scss
 *
 * Contains tooltips of various types based on color differences.
 *
 * Classes added:
 * 	1) hint--error
 * 	2) hint--warning
 * 	3) hint--info
 * 	4) hint--success
 *
 */
/**
 * Error
 */
.tooltip--error:after {
  background-color: #b34e4d;
  text-shadow: 0 -1px 0px #b34e4d; }

.tooltip--error.tooltip--top-left:before {
  border-top-color: #b34e4d; }

.tooltip--error.tooltip--top-right:before {
  border-top-color: #b34e4d; }

.tooltip--error.tooltip--top:before {
  border-top-color: #b34e4d; }

.tooltip--error.tooltip--bottom-left:before {
  border-bottom-color: #b34e4d; }

.tooltip--error.tooltip--bottom-right:before {
  border-bottom-color: #b34e4d; }

.tooltip--error.tooltip--bottom:before {
  border-bottom-color: #b34e4d; }

.tooltip--error.tooltip--left:before {
  border-left-color: #b34e4d; }

.tooltip--error.tooltip--right:before {
  border-right-color: #b34e4d; }

/**
 * Warning
 */
.tooltip--warning:after {
  background-color: #ffdd57;
  text-shadow: 0 -1px 0px #ffdd57; }

.tooltip--warning.tooltip--top-left:before {
  border-top-color: #ffdd57; }

.tooltip--warning.tooltip--top-right:before {
  border-top-color: #ffdd57; }

.tooltip--warning.tooltip--top:before {
  border-top-color: #ffdd57; }

.tooltip--warning.tooltip--bottom-left:before {
  border-bottom-color: #ffdd57; }

.tooltip--warning.tooltip--bottom-right:before {
  border-bottom-color: #ffdd57; }

.tooltip--warning.tooltip--bottom:before {
  border-bottom-color: #ffdd57; }

.tooltip--warning.tooltip--left:before {
  border-left-color: #ffdd57; }

.tooltip--warning.tooltip--right:before {
  border-right-color: #ffdd57; }

/**
 * Info
 */
.tooltip--info:after {
  background-color: #3273dc;
  text-shadow: 0 -1px 0px #3273dc; }

.tooltip--info.tooltip--top-left:before {
  border-top-color: #3273dc; }

.tooltip--info.tooltip--top-right:before {
  border-top-color: #3273dc; }

.tooltip--info.tooltip--top:before {
  border-top-color: #3273dc; }

.tooltip--info.tooltip--bottom-left:before {
  border-bottom-color: #3273dc; }

.tooltip--info.tooltip--bottom-right:before {
  border-bottom-color: #3273dc; }

.tooltip--info.tooltip--bottom:before {
  border-bottom-color: #3273dc; }

.tooltip--info.tooltip--left:before {
  border-left-color: #3273dc; }

.tooltip--info.tooltip--right:before {
  border-right-color: #3273dc; }

/**
 * Success
 */
.tooltip--success:after {
  background-color: #23d160;
  text-shadow: 0 -1px 0px #23d160; }

.tooltip--success.tooltip--top-left:before {
  border-top-color: #23d160; }

.tooltip--success.tooltip--top-right:before {
  border-top-color: #23d160; }

.tooltip--success.tooltip--top:before {
  border-top-color: #23d160; }

.tooltip--success.tooltip--bottom-left:before {
  border-bottom-color: #23d160; }

.tooltip--success.tooltip--bottom-right:before {
  border-bottom-color: #23d160; }

.tooltip--success.tooltip--bottom:before {
  border-bottom-color: #23d160; }

.tooltip--success.tooltip--left:before {
  border-left-color: #23d160; }

.tooltip--success.tooltip--right:before {
  border-right-color: #23d160; }

/**
 * source: hint-always.scss
 *
 * Defines a persisted tooltip which shows always.
 *
 * Classes added:
 * 	1) hint--always
 *
 */
.tooltip--always:after, .tooltip--always:before {
  opacity: 1;
  visibility: visible; }

.tooltip--always.tooltip--top:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--always.tooltip--top:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px); }

.tooltip--always.tooltip--top-left:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--always.tooltip--top-left:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px); }

.tooltip--always.tooltip--top-right:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--always.tooltip--top-right:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px); }

.tooltip--always.tooltip--bottom:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--always.tooltip--bottom:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px); }

.tooltip--always.tooltip--bottom-left:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--always.tooltip--bottom-left:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px); }

.tooltip--always.tooltip--bottom-right:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--always.tooltip--bottom-right:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px); }

.tooltip--always.tooltip--left:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px); }

.tooltip--always.tooltip--left:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px); }

.tooltip--always.tooltip--right:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px); }

.tooltip--always.tooltip--right:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px); }

/**
 * source: hint-rounded.scss
 *
 * Defines rounded corner tooltips.
 *
 * Classes added:
 * 	1) hint--rounded
 *
 */
.tooltip--rounded:after {
  border-radius: 4px; }

/**
 * source: hint-effects.scss
 *
 * Defines various transition effects for the tooltips.
 *
 * Classes added:
 * 	1) hint--no-animate
 * 	2) hint--bounce
 *
 */
.tooltip--no-animate:before, .tooltip--no-animate:after {
  -webkit-transition-duration: 0ms;
  -moz-transition-duration: 0ms;
  transition-duration: 0ms; }

.tooltip--bounce:before, .tooltip--bounce:after {
  -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  -moz-transition: opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24); }

.tooltip--warning:after {
  color: rgba(0, 0, 0, 0.7); }

.tooltip--primary:after {
  background-color: #00d1b2;
  text-shadow: 0 -1px 0px #00d1b2; }

.tooltip--primary.tooltip--top-left:before {
  border-top-color: #00d1b2; }

.tooltip--primary.tooltip--top-right:before {
  border-top-color: #00d1b2; }

.tooltip--primary.tooltip--top:before {
  border-top-color: #00d1b2; }

.tooltip--primary.tooltip--bottom-left:before {
  border-bottom-color: #00d1b2; }

.tooltip--primary.tooltip--bottom-right:before {
  border-bottom-color: #00d1b2; }

.tooltip--primary.tooltip--bottom:before {
  border-bottom-color: #00d1b2; }

.tooltip--primary.tooltip--left:before {
  border-left-color: #00d1b2; }

.tooltip--primary.tooltip--right:before {
  border-right-color: #00d1b2; }

.tooltip--danger:after {
  background-color: #ff3860;
  text-shadow: 0 -1px 0px #ff3860; }

.tooltip--danger.tooltip--top-left:before {
  border-top-color: #ff3860; }

.tooltip--danger.tooltip--top-right:before {
  border-top-color: #ff3860; }

.tooltip--danger.tooltip--top:before {
  border-top-color: #ff3860; }

.tooltip--danger.tooltip--bottom-left:before {
  border-bottom-color: #ff3860; }

.tooltip--danger.tooltip--bottom-right:before {
  border-bottom-color: #ff3860; }

.tooltip--danger.tooltip--bottom:before {
  border-bottom-color: #ff3860; }

.tooltip--danger.tooltip--left:before {
  border-left-color: #ff3860; }

.tooltip--danger.tooltip--right:before {
  border-right-color: #ff3860; }

.tooltip--rounded:after {
  border-radius: 3px; }

[class*="tooltip--"]:after {
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1); }
</style>
