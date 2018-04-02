<template>
  <div class="ribbon tier">
    <div class="container">
      <div class="base"></div>
      <div class="left corner"></div>
      <div class="right corner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ribbon'
  }
</script>

<style>
/* Ribbon styling */

/* Tiers */
/* Garnet */
.credit .ribbon.tier-6 .corner { background: #671d43; }
.credit .ribbon.tier-6 .container {
  border-left: 1px solid #280b1a;
  border-right: 1px solid #280b1a; }
.donors .credit .ribbon.tier-6 .base:after {
  border-left: 1px dashed #280b1a;
	border-right: 1px dashed #280b1a; }
.donors .credit .ribbon.tier-6 .base:before {
	border-left: 1px dashed #b33275;
	border-right: 1px dashed #b33275; }

/* Danburite */
.credit .ribbon.tier-5 .corner { background: #BF8B23; }
.credit .ribbon.tier-5 .container {
  border-left: 1px solid #412f0c;
  border-right: 1px solid #412f0c; }
.donors .credit .ribbon.tier-5 .base:after {
  border-left: 1px dashed #412f0c;
	border-right: 1px dashed #412f0c; }
.donors .credit .ribbon.tier-5 .base:before {
	border-left: 1px dashed #dfb053;
	border-right: 1px dashed #dfb053; }

/* Cavansite*/
.credit .ribbon.tier-4 .corner { background: #5ed6f1; }
.credit .ribbon.tier-4 .container {
  border-left: 1px solid #0e89a4;
  border-right: 1px solid #0e89a4; }
.donors .credit .ribbon.tier-4 .base:after {
  border-left: 1px dashed #0e89a4;
	border-right: 1px dashed #0e89a4; }
.donors .credit .ribbon.tier-4 .base:before {
	border-left: 1px dashed #b9edf9;
	border-right: 1px dashed #b9edf9; }

/* Beryl */
.donors .credit .ribbon.tier-3 .corner { background: #d9c660; }
.donors .credit .ribbon.tier-3 .container {
  border-left: 1px solid #7b6d1e;
  border-right: 1px solid #7b6d1e; }
.donors .credit .ribbon.tier-3 .base:after {
  border-left: 1px dashed #7b6d1e;
	border-right: 1px dashed #7b6d1e; }
.donors .credit .ribbon.tier-3 .base:before {
	border-left: 1px dashed #e6da98;
	border-right: 1px dashed #e6da98; }

/* Hiddenite */
.donors .credit .ribbon.tier-2 .corner { background: #31a36f; }
.donors .credit .ribbon.tier-2 .container {
  border-left: 1px solid #82499c;
  border-right: 1px solid #82499c; }
.donors .credit .ribbon.tier-2 .base:after {
  border-left: 1px dashed #82499c;
	border-right: 1px dashed #82499c; }
.donors .credit .ribbon.tier-2 .base:before {
	border-left: 1px dashed #4eca92;
	border-right: 1px dashed #4eca92; }

/* Ametrine */
.donors .credit .ribbon.tier-1 .corner { background: #c3a1d3; }
.donors .credit .ribbon.tier-1 .container {
  border-left: 1px solid #9b63b6;
  border-right: 1px solid #9b63b6; }
.donors .credit .ribbon.tier-1 .base:after {
  border-left: 1px dashed #9b63b6;
	border-right: 1px dashed #9b63b6; }
.donors .credit .ribbon.tier-1 .base:before {
	border-left: 1px dashed #d3bade;
	border-right: 1px dashed #d3bade; }

.ribbon .container {
	position: relative;
	width: 20px;
	height: 20px;
	overflow: hidden;
	margin: 0 auto;
	border-left: 1px solid #292929;
	border-right: 1px solid #292929; }

.ribbon .base {
	height: 10px;
	width: 100px;
	position: relative;
	z-index: 2; }


.ribbon .base::after,
.ribbon .base::before {
  content: '';
	position: absolute;
	top: 0;
	width: 14px;
  height: 15px; }
.ribbon .base:after {
	left: 2px;
	border-left: 1px dashed #292929;
	border-right: 1px dashed #292929; }
.ribbon .base:before {
	left: 3px;
	border-left: 1px dashed #6D6D6D;
	border-right: 1px dashed #6D6D6D; }

.ribbon .corner {
  position: absolute;
  top: -40px;
  width: 50px;
	height: 50px;
  z-index: 1;
  background: #404040;
  transform: rotate(45deg); }
.ribbon .left.corner { left: -25px; }
.ribbon .right.corner { right: -25px; }
</style>
