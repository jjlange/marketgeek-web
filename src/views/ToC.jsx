/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 *
 * @version 1.0
 * @description TestPage
 **/

// React imports
import React from "react";

// Import icons from Heroicons
import { CashIcon } from "@heroicons/react/outline";

function ToC() {
  return (
    <div
      className={
        "bg-white dark:bg-slate-900 min-h-screen px-4 font-ubuntu overflow-visible relative"
      }>
      {/* 
          This is the header of the page
          It contains the logo and the sign in button, as well as some coloured canvas
          that you can see on the whole page.
        */}

      {/* Top canvas bubble (hidden in dark mode) */}
      <div className="hidden md:absolute top-0 -left-12 w-72 h-72 bg-sky-200 dark:hidden rounded-full filter blur-xl"></div>

      {/* Bottom canvas bubbles (hidden in light mode) */}
      <div className="absolute md:hidden -top-0 ml-[-2em] w-72 h-72 bg-pink-500 dark:bg-pink-700 rounded-full filter blur-xl opacity-20"></div>

      <div className="absolute -bottom-0 ml-[1em] w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full  filter blur-xl opacity-75"></div>

      <div className="absolute -bottom-0 ml-[4em] w-72 h-72 bg-pink-300 dark:bg-pink-400 rounded-full filter blur-3xl opacity-70"></div>

      {/* Logo and Buttons */}
      <div className="pt-16 flex flex-col justify-center  overflow-hidden">
        <div className="relative text-gray-800 w-full md:max-w-6xl sm:max-w-8xl mx-auto">
          <div>
            <div className="flex items-center">
              <div className="w-full flex">
                <h2 className="inline-flex text-2xl md:text-3xl font-bold items-center text-gray-800 dark:text-gray-200 mr-4">
                  <CashIcon className="w-8 h-8 md:w-10 md:h-10 mr-2.5" />
                  MarketGeek
                </h2>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto mt-16">
            <div className="max-w-3xl">
              <h2 className="font-medium md:font-light text-3xl md:text-5xl mt-8 text-gray-900 break-words leading-[1.5em] dark:text-gray-200 max-w-full">
                Terms & Conditions, Privacy Policy <br /> and Cookies 🍪
              </h2>
            </div>

            {/*//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}

            <div className="border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-1 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 md:shadow-2xl">
              <h2 className="font-medium md:font-light text-2xl md:text-4xl mt-2 text-gray-900 break-normal leading-[1.5em] dark:text-gray-200 max-w-xl md:max-w-full">
                Agreement Between You and Market Geek
              </h2>
              <br />

              <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full">1.1</p>
                </div>
                These Terms of Service (the “Terms”) govern your acquisition and
                use of services on our website MarketGeek.com. By accepting
                these Terms, either by clicking a box indicating your acceptance
                or by executing an order form or other document referring to
                these Terms, you agree that these Terms form part of the
                agreement between you and Market Geek A/S (“Market Geek”) (the
                “Agreement”).
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 1.2.</p>
                </div>
                These Terms were last updated on March 15th, 2022 and are
                effective between you and Market Geek as of the date when you
                place an order or set up an account at MarketGeek.com. Market
                Geek reserves the right to change these Terms from time to time.
                If such changes are considered material, Market Geek will inform
                registered customers about the changes by email, and the changes
                will take effect one month after such emails have been sent.
                Your continued use of our website or services after such changes
                will constitute acknowledgment and acceptance of the modified
                Terms.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 1.3.</p>
                </div>
                In case of any discrepancies between the wording of our website
                and these Terms, these Terms prevail.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1  box-border w-20 p-4 text-center">
                  <p className="w-full"> 1.4.</p>
                </div>
                These Terms as well as all other texts throughout the website
                are translated from English to other languages. These are
                unofficial translations and are only provided as convenience
                translations. They should therefore be interpreted in accordance
                with their English language versions which will prevail in the
                event of any discrepancy between the English version and the
                translation. Market Geek assumes no liability for any errors,
                omissions or ambiguities in the translations. Any person or
                entity choosing to rely on the translated content does so at
                their own risk. When in doubt, please always refer to the
                official English language version.
              </h3>
              <h2 className="font-normal text-3xl md:text-4xl mt-8 text-gray-900 break-normal leading-[1.5em] dark:text-gray-200 max-w-xl md:max-w-full">
                2.0 &nbsp;The Services We Deliver – and What You Need to Do
              </h2>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full">2.1.</p>
                </div>
                EU’s General Data Protection Regulation (GDPR) and EU’s ePrivacy
                Directive 2009/136/EC (ePR) test // 2.1.1. Market Geek offers a
                free GDPR/ePR test which analyzes your website to give you an
                indication of whether or not your website is compliant with the
                rules relating to online tracking set out in the GDPR and ePR.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1  box-border w-20 p-4 text-center">
                  <p className="w-full">2.1.2.</p>
                </div>
                The GDPR/ePR test is only based on some basic requirements in
                the GDPR and ePR and is furthermore only an analysis of up to 5
                subpages of your website. It is therefore not a complete
                analysis of your website. Therefore, a positive test response
                must not be taken as a guarantee that your website fulfills all
                requirements set out in the GDPR and ePR.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.1.3. </p>
                </div>
                The Disclaimer of Warranty as set out in clause 9 and the
                Limitation of Liability as set out in clause 10 also apply to
                the use of the GDPR/ePR test.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.1.4. </p>
                </div>
                If you wish to perform a complete analysis of your website, you
                must sign up for a MarketGeek CMP subscription, cf. clause 2.2.
              </h3>
              {/* //------------------------------------- */}
              <h2 className="font-medium md:font-light text-2xl md:text-3xl mt-8 text-gray-900 break-normal leading-[1.5em] dark:text-gray-200 max-w-xl md:max-w-full">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2. </p>
                </div>
                MarketGeek CMP Subscription
              </h2>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <h3 className="font-medium md:font-light text-2xl md:text-3xl mt-8 text-gray-900 break-normal leading-[1.5em] dark:text-gray-200 max-w-xl md:max-w-full">
                  {/* //------------------------------------- */}
                  <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                    <p className="w-full"> 2.2.1 </p>
                  </div>
                  Subject to the sign-up procedure on our website and payment of
                  the Subscription Fee (as defined in clause 3.1 below), Market
                  Geek will deliver to you the services (“MarketGeek CMP”)
                  described on our website.
                </h3>
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.2. </p>
                </div>
                MarketGeek Consent Management Platform (CMP) is designed as a
                service to facilitate compliance with EU regulations concerning
                the use of cookies on your website and to help you obtain the
                relevant consents to the use of cookies from the users of your
                website. Market Geek is only the service provider of the IT
                infrastructure, and it is your own responsibility to ensure
                correct implementation and provide relevant input to the system,
                including drafting an appropriate wording of the request for
                consents and providing the necessary information to the users of
                your website in order to obtain an “informed”, “prior” and
                “implied” or “explicit” consent as appropriate. The relevant EU
                legislation is not necessarily implemented in the same way in
                all EU countries, and we cannot guarantee that using MarketGeek
                CMP will automatically lead to compliance with all relevant
                rules and regulations concerning the use of cookies or the
                collection of consents to the use of cookies. We encourage you
                to seek local legal advice to ensure compliance with local
                legislation when implementing the solution on your website and
                to tailor the wording of the consents to be shown on your
                website.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.3. </p>
                </div>
                If you own multiple websites, MarketGeek CMP can ask your users
                for a consent that covers all your domains (a “Bulk Consent”) on
                the user’s first visit to any of your websites. You must
                guarantee that you are the rightful owner of all domains listed
                on MarketGeek CMP’s “domain list” or that you otherwise have the
                necessary rights to include such websites on the “domain list”.
                The functionality of the Bulk Consent is dependent on the user’s
                acceptance of third-party cookies in the web browser used to
                access your website.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.4. </p>
                </div>
                If you use MarketGeek CMP to exempt specific strictly necessary
                cookies in case a user declines the use of cookies, it is your
                responsibility to ensure that such cookies are strictly
                necessary to enable the basic functionality that the user
                actively seeks on your website in accordance with current
                legislation.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.5. </p>
                </div>
                MarketGeek CMP itself automatically sets up to two cookies in
                the user’s web browser when the user visits your website: The
                first-party cookie “CookieConsent” which stores the user’s
                consent and – if you enable “Bulk Consent” in MarketGeek CMP –
                the third-party cookie “CookieConsentBulkTicket” which stores an
                encrypted key to enable Bulk Consent across your domains as
                described in clause 2.2.3 above. Both cookies expire
                automatically for renewal after 12 months from the date of the
                user’s consent.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.6. </p>
                </div>
                A user may withdraw a consent at any time by deleting the two
                cookies mentioned in clause 2.2.5. Alternatively, a user can
                change a consent at any time by clicking a link that activates
                MarketGeek CMP’s “renew” method as described at
                MarketGeek.com/en/developer. This functionality requires that
                you insert a link to the method from your website, e.g. from
                your website privacy policy, or implement MarketGeek CMP’s
                cookie declaration which contains the appropriate link for
                consent renewal.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.7. </p>
                </div>
                A user consent is logged and documented by registration of the
                user’s anonymized IP number, browser user agent, website URL,
                date and time of consent and a unique, encrypted key that is
                stored in a data center with Market Geek’s cloud vendor,
                Microsoft Ireland Operations Ltd in Dublin, Ireland. You may
                download a copy of the consent log from the MarketGeek Manager
                after which it is your own responsibility to handle the log copy
                data in accordance with current legislation. After 12 months,
                the consent is automatically deleted from our log and then used
                only in an aggregated, anonymized form as part of the statistics
                that you have access to in MarketGeek CMP.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.2.8. </p>
                </div>
                If your subscription is managed by an authorized MarketGeek CMP
                reseller, the reseller will have access to collected data and
                configurations when managing your subscription, but the reseller
                has no right to share, use or sell the collected data and
                configurations. Collected data and configurations will not be
                shared with or sold to other third parties by Market Geek.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.3. </p>
                </div>
                Market Geek is the data processor and acts only on instruction
                by you as the data controller. Market Geek takes the appropriate
                technical and organizational security measures to protect data
                against accidental or unlawful destruction, loss or alteration
                and against unauthorized disclosure, misuse or illegal
                processing. Market Geek is subject to the safeguards provided
                for in the legislation of Denmark, where the company is
                established.
              </h3>
              {/* //------------------------------------- */}
              <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                {/* //------------------------------------- */}
                <div class="inline-flex border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 px-2 py-[1px] rounded-lg bg-sky-200 dark:bg-sky-600/50 mt-2 md:shadow-2xl mr-4 mb-1 box-border w-20 p-4 text-center">
                  <p className="w-full"> 2.4. </p>
                </div>
                Market Geek organizes its resources to provide a high level of
                service with at least 99.9% uptime on the operation of the cloud
                service and a response time of less than 1 business day for
                critical support requests (blocking event) and 10 business days
                for non-critical support requests (non-blocking event).
              </h3>
            </div>
            {/* 
            <h3 className="text-2xl mt-8 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
              text-------------------------
              <br />
              <br /> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum
              pharetra, ornare orci in, mattis sem.
            </h3> */}

            {/* Footer */}
            <div className="mt-16 mb-6">
              <h2
                className="font-light text-sm
                text-gray-900 leading-[1.75em] dark:text-gray-200">
                Copyright © 2022 -{" "}
                <a href="/" className="text-gray-900 dark:text-gray-300">
                  MarketGeek
                </a>
                . All rights reserved.
                <br />
                <span className="font-bold">
                  ⚙️ Web v{process.env.REACT_APP_VERSION}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToC;
