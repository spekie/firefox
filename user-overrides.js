/*
 * user-overrides.js
 */

/* about:preferences#passwordsAutofill */
user_pref("signon.rememberSignons", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/* about:preferences#ai */
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
user_pref("browser.ai.control.pdfjsAltText", "blocked");
user_pref("browser.ai.control.sidebarChatbot", "blocked");
user_pref("browser.ai.control.smartTabGroups", "blocked");
user_pref("browser.ai.control.smartWindow", "blocked");
user_pref("browser.ai.control.translations", "blocked");

/* misc */
user_pref("network.trr.mode", 5); // about:preferences#privacy use default DNS resolver
user_pref("browser.urlbar.suggest.topsites", false); // about:preferences#search do not suggest shortcuts
user_pref("datareporting.usage.uploadEnabled", false); // about:preferences#permissionsData data collection
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false); // about:preferences#tabsBrowsing media disable picture-in-picture
user_pref("media.gmp-widevinecdm.enabled", false); // about:preferences#tabsBrowsing media disable DRM/widevine
user_pref("media.gmp-widevinecdm.visible", false); // disable DRM/widevine prompt
//user_pref("general.autoScroll", true); // about:preferences#accessibility use autoscrolling
//user_pref("widget.use-xdg-desktop-portal.file-picker", 0); // do not use xdg-desktop-portal file picker
//user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // for css themes
//user_pref("browser.compactmode.show", true); // compact toolbar mode