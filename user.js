/*
 * Copyright (c) 2025 spekie
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/*
 * This file is a custom, private and secure user.js for Firefox.
 * A comment is provided to give a general idea of what the preferences
 * below do, to somewhat document if they are beneficial to security.
 */

/* Disable Telemetry and Annoyances */
user_pref("browser.aboutwelcome.enabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("browser.ml.linkPreview.longPress", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("browser.download.enableDeletePrivate", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "null");
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.all", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.ml.enabled", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
/* Removes Firefox labs (does not work)
user_pref("browser.preferences.experimental.hidden", true);
user_pref("browser.preferences.experimental", false);
*/

/* Disables the Widevine digital rights management (DRM) */
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);

/* Privacy and Security enhancements */
user_pref("dom.security.https_only_mode", true);
user_pref("privacy.history.custom", true);
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.contentblocking.category", "strict");

/* Disable autofill passwords and related */
user_pref("signon.rememberSignons", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.autofillForms", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/* Disable Google Safe Browsing */
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google5.advisoryName", "");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google5.updateURL", "");
user_pref("browser.safebrowsing.provider.google5.reportURL", "");
user_pref("browser.safebrowsing.provider.google5.gethashURL", "");
user_pref("browser.safebrowsing.provider.google5.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google5.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google5.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
/* Blank URLs for Google Safe Browsing (gets overriden)
user_pref("browser.safebrowsing.provider.google.reportURL", "")
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "")
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "")
user_pref("browser.safebrowsing.provider.google.advisoryURL", "")
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
*/
