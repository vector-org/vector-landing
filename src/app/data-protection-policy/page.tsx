"use client"

import Footer from "../../components/footer"
import NavMenu from "../../components/navMenu"

export default function DataProtectionPolicyPage() {
  const companyName = "playonvector.com Ltd."
  const companyDomain = "playonvector.com"
  const companyAddress = {
    line1: "71-75 Shelton St",
    city: "London",
    stateProvince: "",
    zipPostalCode: "WC2H 9JQ",
    country: "United Kingdom"
  }
  // const contactPerson = "Data Protection Officer/Privacy Team"

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <div className="relative z-0 flex w-screen max-w-[1600px] flex-col items-center bg-white px-8 pb-8 md:px-24">
        <NavMenu />
        <p className="pointer-events-none absolute -z-10 hidden select-none whitespace-nowrap text-[200px] font-bold text-[--background] md:flex">
          YOUR KEYS
        </p>
        <p className="pointer-events-none absolute right-16 -z-10 hidden translate-x-1/2 translate-y-[800px] -rotate-90 select-none whitespace-nowrap text-[200px] font-bold text-[--background] [mask-image:linear-gradient(to_top,white,transparent)] md:flex">
          YOUR GAMES
        </p>
        <h1 className="mb-6 mt-32 text-center text-6xl font-bold text-gray-900">
          Global Data Protection Policy
        </h1>
        <p className="mb-4 text-sm text-gray-600">Last Updated: 28.05.2025</p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Introduction
          </h2>
          <p className="mb-3">
            {companyName} (referred to as &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting the privacy and personal
            data of our users and customers worldwide. We operate in compliance
            with major data protection laws, including the EU General Data
            Protection Regulation (GDPR) and UK GDPR, the California Consumer
            Privacy Act (CCPA), and other applicable data protection
            regulations.
          </p>
          <p className="mb-3">
            This Policy explains what personal data we collect, how and why we
            process it, and the rights you have regarding your data. By using
            our digital services (including our websites, newsletter, and
            backend systems), you acknowledge that you have read and understood
            this Data Protection Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Scope of this Policy
          </h2>
          <p className="mb-3">
            This Policy applies globally to all personal data processed by{" "}
            {companyName} in the context of our digital services – including our
            public websites, newsletter subscriptions, and any related online
            services or backend systems. It covers all users of our services,
            regardless of their country of residence, ensuring a consistent
            level of privacy protection. We may provide additional privacy
            notices for specific products, services, or regions as required by
            local laws, but unless specifically stated, those should be read
            together with this global Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Personal Data We Collect and Use
          </h2>
          <p className="mb-3">
            In the last 12 months, we have collected the following categories of
            personal data (as defined under relevant laws) from users of our
            services:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Identification and Contact Data:</strong> This includes
              your name and email address. We collect this information when you
              create an account, subscribe to our newsletter, or otherwise
              provide it to us. We use it to identify you, personalize your
              experience, and communicate with you (e.g., sending service
              updates or the newsletter).
            </li>
            <li className="mb-2">
              <strong>Technical Information:</strong> We collect data such as IP
              addresses and hardware or device fingerprints. An IP address
              identifies the internet connection used, and a hardware
              fingerprint is a unique device identifier derived from your
              device&apos;s attributes (used to recognize your device on our
              systems). This technical data is collected automatically when you
              interact with our website or services. It helps us with security
              (e.g., detecting suspicious logins), fraud prevention, and
              analytics to improve our services. These identifiers (like IP and
              device IDs) are considered personal data under laws like CCPA and
              GDPR.
            </li>
            <li className="mb-2">
              <strong>Payment and Transaction Data:</strong> If you make
              purchases or subscribe to paid services, we (or our payment
              processors) collect information needed to process the transaction.
              This may include your payment card details or payment account
              information, billing address, and transaction history. We use this
              data to process payments, provide the purchased services, and for
              related record-keeping (such as invoicing and complying with
              financial regulations). For security, we do not store full payment
              card numbers on our systems; payments are handled via accredited
              third-party payment providers.
            </li>
            <li className="mb-2">
              <strong>Usage Data (Logs and Analytics):</strong> When you use our
              website or backend systems, we may collect log data about your
              interactions. This can include timestamps of visits, pages or
              features used, browser type, and operating system. We use this
              information to administer and improve our services, fix
              performance issues, and understand user engagement. Where
              possible, we aggregate or anonymize this data so it no longer
              identifies you personally.
            </li>
          </ul>
          <p className="mb-3">
            We do not knowingly collect any sensitive personal data such as
            government ID numbers, health information, or biometric data through
            our standard services. We also do not direct our services to
            children under the age of 13 (or applicable minimum age in your
            jurisdiction), and we do not knowingly collect data from such minors
            without parental consent. If you believe a child has provided us
            personal data, please contact us so we can delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Purposes of Processing Personal Data
          </h2>
          <p className="mb-3">
            We process the personal data described above for the following
            purposes, and we ensure that each purpose has a valid legal basis
            under applicable law (such as GDPR):
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Providing and Improving Our Services:</strong> We use
              personal data to operate the website and backend systems, to
              create and manage user accounts, and to provide the features you
              request. For example, we use your name and email to register your
              account and to allow you to log in, and we use IP
              addresses/hardware fingerprints to deliver content to your device
              and maintain session security. We also analyze usage data to
              debug, improve performance, and develop new features.{" "}
              <em>Legal basis:</em> This is generally necessary for the
              performance of a contract with you (for users who have signed up)
              or is within our legitimate interests in running and improving a
              safe, efficient service.
            </li>
            <li className="mb-2">
              <strong>Communications and Newsletter:</strong> If you subscribe
              to our newsletter or have an account, we use your email (and
              possibly name) to send you the newsletter, updates about our
              services, or relevant promotional content. We only send you
              marketing emails if you have consented to receive them (for
              example, by signing up to our newsletter) or if otherwise
              permitted by law. You can opt out of marketing communications at
              any time by clicking the unsubscribe link in our emails or
              contacting us. <em>Legal basis:</em> Consent (for non-essential
              communications) or our legitimate interest in keeping our users
              informed about updates (where applicable).
            </li>
            <li className="mb-2">
              <strong>Payment Processing and Order Fulfillment:</strong> We use
              payment and contact data to process transactions when you make a
              purchase or subscription, and to deliver the paid features or
              services to you. This includes sending purchase confirmations,
              invoices, or receipts, and facilitating any renewals or refunds.{" "}
              <em>Legal basis:</em> Performance of a contract (fulfilling our
              agreement to provide the paid service) and compliance with legal
              obligations (financial and tax regulations may require us to
              retain transaction records).
            </li>
            <li className="mb-2">
              <strong>Security and Fraud Prevention:</strong> Personal
              identifiers like IP addresses and device fingerprints are used to
              protect our services and our users against fraud, abuse, and
              security risks. For example, we may use this data to detect
              multiple accounts, prevent unauthorized access, and monitor for
              malicious activities. We also keep logs to ensure network and
              information security. <em>Legal basis:</em> Legitimate interests –
              it is in our interest (and our users&apos; interest) to keep our
              services secure and prevent misuse. In some cases, we may also
              have a legal obligation to implement certain security measures.
            </li>
            <li className="mb-2">
              <strong>Legal Compliance:</strong> In certain cases, we need to
              process or retain personal data to comply with laws and
              regulations. For instance, we may retain transaction data to
              satisfy accounting laws, or disclose information if required by
              court order or regulatory authorities. We will only do so when
              lawfully required. <em>Legal basis:</em> Compliance with a legal
              obligation.
            </li>
            <li className="mb-2">
              <strong>Other Purposes (with Notice):</strong> If we intend to
              process personal data for a purpose that is not incompatible with
              the above, we will provide notice to you (and collect consent if
              required). We will always ensure a valid lawful basis for any new
              processing purpose, and will not use your personal data in a
              manner that is unfair or misleading.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Legal Bases for Processing (GDPR/UK GDPR)
          </h2>
          <p className="mb-3">
            For individuals in the European Economic Area (EEA) and the UK, we
            must have a legal basis under the GDPR/UK GDPR for processing your
            personal data. As noted above, the main legal grounds we rely on
            are: Consent, Performance of Contract, Legal Obligation, and
            Legitimate Interests. Below is a brief explanation of these bases
            and how they apply:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Consent:</strong> We will request your clear and
              affirmative consent before processing your data for optional
              purposes. For example, we ask for consent to send promotional
              emails or to collect certain analytics cookies. Where consent is
              given, you have the right to withdraw it at any time (see Your
              Rights below). We do not process your data based on consent if
              another legal basis applies, and we will make it as easy to
              withdraw consent as it is to give it.
            </li>
            <li className="mb-2">
              <strong>Performance of a Contract:</strong> When processing is
              necessary to provide you with services that you have requested or
              signed up for, we rely on this basis. This covers most of our core
              service operations – e.g., when you create an account or make a
              purchase, we must use your personal data to fulfill our
              obligations to you (provide access, deliver the service, etc.).
              Without this data, we cannot perform the contract.
            </li>
            <li className="mb-2">
              <strong>Legal Obligation:</strong> If we are subject to a legal or
              regulatory obligation that requires processing of personal data,
              we will process data on this basis. Examples include retaining
              transaction records for tax law, responding to government data
              requests where legally compelled, or complying with consumer
              protection laws. We only process the data necessary for compliance
              and only retain it for as long as required by law.
            </li>
            <li className="mb-2">
              <strong>Legitimate Interests:</strong> We process certain data as
              needed for legitimate interests of our business or of third
              parties, provided that those interests are not overridden by your
              fundamental rights and freedoms. We have carefully balanced our
              interests with your privacy. Processing under this basis includes
              uses such as securing our platform, preventing fraud, improving
              user experience, and (in some cases) limited marketing to existing
              customers. For example, collecting IP addresses to prevent abuse
              is within our legitimate interests. Important: If we rely on
              legitimate interests, you have the right to object to such
              processing (see Your Rights below), and we will honor such
              objections unless we have compelling legitimate grounds to
              continue or the processing is needed for legal claims.
            </li>
          </ul>
          <p className="mb-3 text-sm">
            (Note: We do not typically rely on the less common GDPR bases of
            &quot;vital interests&quot; or &quot;public interest,&quot; which
            apply to rare situations like life-and-death emergencies or official
            public duties. If those ever become relevant, we will update this
            Policy accordingly.)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Disclosure of Personal Data to Third Parties
          </h2>
          <p className="mb-3">
            We do not sell your personal information to third parties and have
            not sold personal data in the past 12 months. However, we do share
            certain personal data with trusted third-party service providers and
            partners who help us operate our business (&quot;data
            processors&quot; or service providers). When we share data, we
            ensure it is handled in accordance with this Policy and applicable
            law (through contracts or Data Processing Addendums). The categories
            of recipients of personal data include:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Hosting and Infrastructure Providers:</strong> We host our
              websites and backend systems on cloud platforms such as Vercel and
              other cloud providers. These providers may process personal data
              (e.g. storing account information or serving our webpages to you)
              as part of providing us with cloud infrastructure. They act under
              our instructions and implement security measures to protect your
              data.
            </li>
            <li className="mb-2">
              <strong>Email Delivery Services:</strong> We use third-party email
              platforms (for example, SendGrid by Twilio) to send out
              transactional emails (such as verification emails or receipts) and
              newsletter communications. These services will have access to your
              email address (and name, if included in the email content) for the
              purpose of sending emails on our behalf. They are not permitted to
              use your email for any other purposes.
            </li>
            <li className="mb-2">
              <strong>Payment Processors:</strong> For handling payments and
              billing securely, we rely on accredited payment processing
              companies (such as Stripe, PayPal, or similar). When you enter
              payment information, it is transmitted directly to the payment
              processor; we receive confirmation of payment and limited details
              (e.g., last four digits of a card, payment token, transaction ID).
              Our payment processors are compliant with PCI-DSS and other
              applicable financial data security standards.
            </li>
            <li className="mb-2">
              <strong>Analytics and Usage Tracking Partners:</strong> To better
              understand how our services are used, we may utilize analytics
              services that collect usage data (which can include IP address or
              device identifiers). For example, we might use a web analytics
              tool to collect aggregated statistics on page views or feature
              usage. Where required, we will obtain consent for such analytics
              (e.g., via a cookie consent banner in EU jurisdictions). Data
              shared with analytics providers is typically pseudonymized or
              aggregated.
            </li>
            <li className="mb-2">
              <strong>Anti-Fraud and Security Partners:</strong> We may share
              information like IP addresses or device fingerprints with services
              that help us detect fraud or prevent security incidents. For
              instance, we could use a service that analyzes device data to flag
              suspicious activities (such as automated bots or repeat fraudulent
              transactions). These partners only use the data to provide their
              fraud detection service to us and are bound by confidentiality.
            </li>
            <li className="mb-2">
              <strong>Business Advisors and Legal:</strong> In certain cases,
              our professional advisors (lawyers, accountants, auditors) may
              need to access some personal data if it is necessary for advising
              us (for example, reviewing a contract you have with us or auditing
              our financial statements). These parties are also legally and
              contractually obligated to keep such information confidential.
            </li>
            <li className="mb-2">
              <strong>Legal or Regulatory Recipients:</strong> We may disclose
              personal data when required by law or necessary to protect our
              rights. For example, if we receive a legitimate legal order (such
              as a subpoena or court order) or a government demand under
              applicable law, we may be obligated to disclose certain data. We
              will carefully review such requests and only comply if legally
              required. We may also disclose information if necessary to enforce
              our terms of service or to protect against legal liability or
              security threats.
            </li>
          </ul>
          <p className="mb-3">
            All third-party processors acting on our behalf only process your
            personal data for the specific purposes we have contracted them for,
            and in line with this Policy. We do not permit our service providers
            to use your data for their own marketing or other independent
            purposes. A list of our key subprocessors can be provided upon
            request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            International Data Transfers
          </h2>
          <p className="mb-3">
            Given the global nature of our operations and the use of cloud
            technologies, personal data may be transferred to or accessible by
            entities in other countries. For example, if you are located in the
            EU/UK, your personal data might be processed on servers located in
            the United States or other jurisdictions where our service providers
            (like Vercel or SendGrid) maintain facilities. We take steps to
            ensure that international data transfers comply with applicable data
            protection laws:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Adequacy and Safeguards:</strong> Whenever we transfer
              personal data out of the EU/EEA or other regions with data export
              restrictions, we will ensure an adequate level of protection. In
              most cases, we rely on Standard Contractual Clauses (SCCs)
              approved by the European Commission as part of our contracts with
              service providers, which legally require them to protect EU
              personal data. We also evaluate supplementary measures
              (encryption, access controls) as needed.
            </li>
            <li className="mb-2">
              <strong>US and Other Jurisdictions:</strong> Our U.S.-based
              service providers adhere to high security standards. Some may also
              certify under frameworks like the EU-US Data Privacy Framework (if
              applicable) or similar schemes, to facilitate compliant data
              transfer. Regardless of location, we contractually bind all
              recipients to uphold privacy protections comparable to those under
              your local law.
            </li>
            <li className="mb-2">
              <strong>Your Rights Regarding Transfers:</strong> If you are a
              resident of the EU/UK, you have the right to request details about
              the transfer safeguards we implement (such as a copy of the
              relevant contractual clauses). Please contact us if you have
              questions related to cross-border data transfers.
            </li>
            <li className="mb-2">
              <strong>Data Localization:</strong> Unless otherwise required by
              law, we do not generally mandate that data be stored in a specific
              country. However, we maintain strong security and access control
              practices globally to ensure your data is safe wherever it is
              processed.
            </li>
          </ul>
          <p className="mb-3">
            By using our services or submitting your information to us, you
            understand that your personal data may be transferred and stored in
            countries other than your own. Regardless of where processing
            occurs, we will protect your data to the standards outlined in this
            Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Data Retention
          </h2>
          <p className="mb-3">
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected, or to satisfy legal or business
            requirements. Retention periods vary depending on the type of data
            and the purpose of processing:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Account Information:</strong> We keep your account
              registration data (like name, email) for as long as your account
              is active. If you choose to delete your account or it remains
              inactive for an extended period, we will delete or anonymize this
              data, unless we need to retain it for legal reasons.
            </li>
            <li className="mb-2">
              <strong>Newsletter Subscription:</strong> We retain your email on
              our mailing list until you unsubscribe or withdraw consent. Upon
              opt-out, we will stop sending you newsletters and promptly remove
              or suppress your contact from our active mailing lists.
            </li>
            <li className="mb-2">
              <strong>Transaction Records:</strong> We may retain payment and
              transaction data for a longer period as required by law (for
              example, financial records must be kept for a minimum number of
              years under tax laws). Typically, this is 5-7 years, or as
              mandated by local regulations. Such data will be restricted in use
              to compliance and audit purposes only.
            </li>
            <li className="mb-2">
              <strong>Logs and Analytics:</strong> Server logs and analytics
              data are generally retained for a short period (e.g., 6-12 months)
              for the purpose of security monitoring and trend analysis, then
              either deleted or anonymized. Aggregated data that no longer
              identifies individuals may be kept longer for historical service
              performance analysis.
            </li>
            <li className="mb-2">
              <strong>Legal Holds:</strong> If we are involved in litigation or
              receive a legal request, we may need to preserve certain data
              until the matter is resolved. In such cases, deletion may be
              postponed for the relevant data until it is legally safe to delete
              it.
            </li>
          </ul>
          <p className="mb-3">
            When we no longer have a legitimate need to retain your personal
            information, we will securely delete it or anonymize it. If deletion
            is not immediately possible (for example, because the data is stored
            in backup archives), we will isolate it from any further processing
            until deletion is feasible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Data Security
          </h2>
          <p className="mb-3">
            We take data security seriously and have implemented a range of
            technical and organizational measures to protect your personal data
            against unauthorized access, loss, or alteration. These include
            encryption of data in transit (e.g., TLS for our website), access
            controls restricting who within our organization and our processors
            can access personal data, regular security audits, and employee
            training on data protection. We also pseudonymize or encrypt
            sensitive information where appropriate, and we monitor our systems
            for possible vulnerabilities and attacks.
          </p>
          <p className="mb-3">
            While we follow industry best practices to safeguard data, please
            note that no system can be guaranteed 100% secure. We encourage you
            to use unique and strong passwords for your account and to notify us
            immediately if you suspect any unauthorized access to your account
            or personal data. In the event of a data breach that poses a
            significant risk to your rights and freedoms, we will notify the
            affected individuals and relevant authorities as required by law
            (for example, under GDPR we would notify the supervisory authority
            and you within the mandated time frame).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Your Rights as a Data Subject/Consumer
          </h2>
          <p className="mb-3">
            We respect your rights to control your personal information.
            Depending on your location and the applicable law, you may have some
            or all of the following rights regarding your personal data:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>Right to Access:</strong> You have the right to request
              confirmation of whether we are processing your personal data, and
              if so, to obtain a copy of the personal data we hold about you.
              This is sometimes called the &quot;right to know&quot; under CCPA
              – California residents can request a report outlining the specific
              pieces and categories of personal information we have collected
              about them in the past 12 months, along with details about the
              sources, purposes, and third parties with whom we share it.
            </li>
            <li className="mb-2">
              <strong>Right to Rectification/Correction:</strong> You have the
              right to have inaccurate personal data corrected and to have
              incomplete data completed. If any of your information we hold is
              incorrect or has changed (for example, you&apos;ve changed your
              email address), please inform us so we can update it. California
              residents have a similar right to request correction of inaccurate
              information.
            </li>
            <li className="mb-2">
              <strong>Right to Deletion:</strong> You have the right to request
              that we delete your personal data. For EU/UK individuals, this is
              the GDPR &quot;right to erasure&quot; (or &quot;right to be
              forgotten&quot;); for California consumers, the CCPA right to
              delete personal information applies (subject to certain
              exceptions). Upon a verified deletion request, we will erase your
              personal data from our records, and direct our service providers
              to do the same, unless retention is required by law or exempted
              (for example, we might not delete information needed for an
              ongoing transaction or necessary to comply with a legal
              obligation).
            </li>
            <li className="mb-2">
              <strong>Right to Restrict Processing:</strong> If you believe your
              data is inaccurate or is being processed unlawfully, or if you
              have objected to our processing (see below), you can request that
              we restrict processing of your data. This means we will store your
              data but temporarily refrain from using it for the stated purpose
              until the issue is resolved.
            </li>
            <li className="mb-2">
              <strong>Right to Object:</strong> You have the right to object to
              our processing of your personal data when we process it under a
              legitimate interest basis or for direct marketing. For example,
              you can object to us using your data for marketing; if you do, we
              will stop using your data for that purpose. In other cases, we
              will cease processing unless we have compelling legitimate grounds
              to continue (or if the processing is needed for legal claims).
            </li>
            <li className="mb-2">
              <strong>Right to Data Portability:</strong> For data you provided
              to us and that we process by automated means on the basis of
              consent or contract, you have the right to request a copy in a
              portable format (e.g., a common machine-readable format) so you
              can reuse it or transfer it to another provider. Where technically
              feasible, you can also request that we directly transfer the data
              to another company at your direction.
            </li>
            <li className="mb-2">
              <strong>Right to Withdraw Consent:</strong> If we are processing
              your personal data based on your consent, you have the right to
              withdraw that consent at any time. Once you withdraw consent, we
              will stop the specific processing that was based on consent. For
              example, you can unsubscribe from our newsletter to withdraw
              consent for marketing emails, and we will stop sending them.
              Withdrawal of consent will not affect the lawfulness of any
              processing done before you withdrew consent.
            </li>
            <li className="mb-2">
              <strong>Right to Not Be Subject to Automated Decisions:</strong>{" "}
              We do not currently make any decisions about you that are solely
              based on automated processes (without human involvement) and that
              produce legal or similarly significant effects. If that changes,
              you would have the right not to be subject to such decisions
              without your explicit consent or other legal justification. You
              would also have the right to request human review of any automated
              decision.
            </li>
            <li className="mb-2">
              <strong>
                California &quot;Do Not Sell or Share&quot; Rights:
              </strong>{" "}
              As noted, we do not sell personal information. If in the future we
              ever considered &quot;selling&quot; your personal data (as defined
              by CCPA/CPRA) or sharing it for cross-context behavioral
              advertising, we would provide a &quot;Do Not Sell or Share My
              Personal Information&quot; link on our website and honor opt-out
              preferences (including Global Privacy Control signals). Since we
              do not sell or share data, this opt-out is not applicable other
              than as a formal right.
            </li>
            <li className="mb-2">
              <strong>Right to Non-Discrimination:</strong> We will never
              discriminate or retaliate against you for exercising any of your
              privacy rights. This means, for instance, we will not deny you
              goods or services, charge you a different price, or provide a
              different level of quality because you exercised your rights under
              CCPA or GDPR. Your access to our services will remain the same
              regardless of whether you choose to exercise privacy rights.
            </li>
          </ul>
          <p className="mb-3">
            These rights are subject to certain legal limitations. For example,
            we might not be able to delete your data if we are legally required
            to keep it, or we may refuse a request if it is manifestly unfounded
            or excessive. We will inform you if any such limitations apply in
            the course of fulfilling your request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Exercising Your Rights
          </h2>
          <p className="mb-3">
            To exercise any of your rights described above, please contact us
            using the contact details in the Contact Us section below. For
            clarity:
          </p>
          <ul className="mb-3 list-disc pl-6">
            <li className="mb-2">
              <strong>How to Make a Request:</strong> You can send us an email
              or a written request specifying which right you wish to exercise.
              Please provide enough information to identify you (we may ask you
              to verify your identity to ensure we do not disclose data to the
              wrong person). If you have an account, you may need to write from
              the email associated with that account or provide other
              identifying information. California residents can also designate
              an authorized agent to make requests on their behalf; we will
              require the agent to provide proof of authorization and also
              verify your identity directly with us.
            </li>
            <li className="mb-2">
              <strong>Response Timeframe:</strong> We will respond to your
              request as soon as possible and, in any case, within the timeframe
              required by law. Under GDPR/UK law, this is typically within 1
              month. Under CCPA, we aim to confirm receipt within 10 days and
              respond within 45 days (with an extension of an additional 45 days
              if reasonably necessary). You will be informed if an extension is
              needed.
            </li>
            <li className="mb-2">
              <strong>Verification:</strong> For certain requests (like access
              or deletion under CCPA), we are required to verify your identity
              to a &quot;reasonable degree of certainty&quot; (or a higher
              degree for sensitive requests) before responding. This may involve
              asking you to provide information that we can match with data we
              already have (such as details of your last transaction or your
              user profile information). We will only use this verification data
              for confirming identity and security purposes.
            </li>
            <li className="mb-2">
              <strong>Format of Response:</strong> If you requested access to
              your data, we will provide it in a secure format. For portability
              requests, we will provide the data in a commonly used
              machine-readable format (like CSV or JSON). If we deny your
              request (fully or partially), we will explain the reasons, except
              where we are legally prevented from doing so.
            </li>
            <li className="mb-2">
              <strong>No Fee (Generally):</strong> You will not have to pay a
              fee to exercise your rights. However, if a request is excessive or
              repetitive, the law permits us to either charge a reasonable fee
              or refuse the request. We will of course inform you of any such
              decision and reasons for it.
            </li>
          </ul>
          <p className="mb-3">
            If you have any questions about your rights or how to exercise them,
            feel free to reach out to us. We are here to help and committed to
            honoring your rights to the fullest extent required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Contact Us (Data Protection Inquiries)
          </h2>
          <p className="mb-3">
            If you have any questions, concerns, or requests regarding this Data
            Protection Policy or your personal data, please contact us at:
          </p>
          <div className="mb-3">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:privacy@${companyDomain}`}
              className="text-blue-600 hover:underline"
            >
              privacy@{companyDomain}
            </a>
          </div>
          <div className="mb-3">
            <p>
              <strong>Postal Mail:</strong>
            </p>
            <p>{companyName}</p>
            <p>{companyAddress.line1}</p>
            <p>
              {companyAddress.city}, {companyAddress.stateProvince},{" "}
              {companyAddress.zipPostalCode}
            </p>
            <p>{companyAddress.country}</p>
          </div>
          {/* {contactPerson && (
            <div className="mb-3">
              <strong>Contact Person:</strong> {contactPerson}
            </div>
          )} */}
          <p className="mb-3">
            We are happy to assist with any inquiries about our privacy
            practices. If you contact us by mail, please label your
            communication &quot;Data Protection Inquiry&quot; so it can be
            directed appropriately.
          </p>
          <p className="mb-3">
            For users in the EU/EEA or UK: {companyName} is the data controller
            responsible for your personal data. You also have the right to lodge
            a complaint with a supervisory authority (such as your national Data
            Protection Authority, or the UK Information Commissioner&apos;s
            Office) if you believe our processing of your personal data violates
            the law. We kindly ask that you first give us the opportunity to
            address your concerns by contacting us directly, and we will do our
            best to resolve any issues.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            Updates to This Policy
          </h2>
          <p className="mb-3">
            We may update this Data Protection Policy from time to time in
            response to changing legal, technical, or business developments.
            When we update the Policy, we will post the new version on our
            website and update the &quot;Last Updated&quot; date at the top. If
            changes are material, we may also notify you by email or through a
            notice on our site, prior to the changes taking effect. We encourage
            you to review this Policy periodically to stay informed about how we
            are protecting your information.
          </p>
          <p className="mb-3">
            By continuing to use our services after any updates become
            effective, you acknowledge the revised Policy. We will not reduce
            your rights under this Policy without your explicit consent.
          </p>
        </section>

        <p className="mt-8 text-center text-gray-700">
          Thank you for reading our Data Protection Policy. Your trust is
          important to us, and we are dedicated to safeguarding your privacy. If
          you have any questions or feedback regarding this Policy, please do
          not hesitate to contact us.
        </p>
      </div>
      <div className="relative mt-8 flex w-screen max-w-[1600px] flex-col items-center border-t border-black bg-white">
        <div className="flex w-full px-8 md:px-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}

