# krogerCouponWorkflow
Tools that improve me obsessive Couponing at Kroger.

## ClippedCouponBookmarklet.js
This file is a Bookmarklet, that is, a bookmark that contains javascript code that can be triggered by clicking it while on a given website. This bookmark will output a list of your clipped Kroger digital coupons in a more text-friendly and better sorted format.

### Usage
To use this file:
1. Create a new bookmarklet (browser specific but something like):
 * Copy the bookmarklet code from ClippedCouponBookmarklet.js (note that you should never trust random javascript, but you have to here if you want to use it)
 * Right click bookmark bar
 * Click "New Bookmark"
 * Name the bookmark anything
 * Paste the bookmarklet code in the Location field
 * Save the bookmark
2. Navagate to the [clipped coupon page](https://www.kroger.com/cl/mycoupons/), you must be logged in and have clipped coupons
3. Click the bookmarklet
4. It should prompt you with a sorted list of coupons that you can copy then dismiss

![screenshot](/krogerListScreenshot.png)


###
Notes:
I attempt to replace common strings with abbreviations or deletions e.g. "Simple Truth" -> "ST", "™" -> deleted.

### TODOS
* My error handling is non-existant
* My commenting is non-existant
 
