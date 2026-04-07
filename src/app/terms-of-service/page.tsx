"use client"

import Footer from "../../components/footer"
import NavMenu from "../../components/navMenu"

export default function TermsOfServicePage() {
  const platformName = "VECTOR"
  const companyLegalName = "playonvector.com Ltd." // Or the legal entity name if different
  const contactEmail = "hello@playonvector.com" // Replace with actual contact email
  const privacyContactEmail = "hello@playonvector.com" // Replace with actual privacy contact
  // const governingJurisdiction = "Your State/Country" // e.g., "State of California, USA" or "England and Wales"
  // const courtLocation = "City, State/Country courts" // e.g., "the courts of London, England" or "State and Federal courts located in Los Angeles, California"
  // const liabilityCapAmount = "$100" // Or equivalent in local currency

  const companyAddress = {
    line1: "71-75 Shelton St",
    city: "London",
    stateProvince: "",
    zipPostalCode: "WC2H 9JQ",
    country: "United Kingdom"
  }

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
          {platformName} Terms of Service
        </h1>
        <p className="mb-6 text-sm text-gray-600">Last Updated: 28.05.2025</p>

        <p className="mb-6">
          Please read these Terms of Service (“Terms”) carefully before using
          the {platformName} platform. By accessing or using {platformName}, you
          agree to be bound by these Terms. If you do not agree with any part of
          these Terms, you must not use the Platform.
        </p>

        <ol className="list-decimal space-y-8 pl-6">
          {/* 1. Company Information */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Company Information
            </h2>
            <p>
              {platformName} (referred to as “Company”, “we”, “us” or “our”), is
              the owner and operator of the {platformName} platform.
            </p>
          </li>

          {/* 2. Platform Description */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Platform Description
            </h2>
            <p>
              {platformName} is a global digital game distribution platform that
              leverages blockchain technology for game license management. The
              Platform is available to users worldwide (except in jurisdictions
              where use of the Platform is prohibited by law). It is designed
              for both gamers and game developers, providing a marketplace to
              buy, download, play, resell, or share digital video games. Each
              game license on {platformName} is represented by a smart contract
              on our proprietary blockchain (the “{platformName} Chain”), which
              serves as proof of ownership of that game license. Users interact
              with {platformName} primarily through our official desktop client
              application, which allows you to browse the game store, purchase
              games, manage your library of game licenses, and download/play the
              games you own. Download and playing rights are tied to license
              ownership – only the holder of the corresponding game license can
              download and launch the game via the Platform. We continuously
              strive to keep {platformName} accessible and functional, but
              availability may vary based on geographic or legal restrictions,
              and we reserve the right to limit service in certain regions as
              required.
            </p>
          </li>

          {/* 3. User Accounts and Eligibility */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              User Accounts and Eligibility
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Account Registration:
              </h3>
              <p>
                In order to access key features of {platformName} (such as
                purchasing or playing games), you must create a user account. We
                offer a flexible account system that does not necessarily
                require traditional login credentials stored on our servers. For
                example, you may create an account by linking a digital wallet
                or using other blockchain-based authentication methods.
                Providing an email address or other personal information is
                optional for basic use, though it may be required for certain
                features (such as communication or support). You are responsible
                for any information you do choose to provide, and it must be
                accurate and up-to-date.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Account Security:
              </h3>
              <p>
                You are solely responsible for maintaining the confidentiality
                and security of your account credentials. This includes
                safeguarding private keys, seed phrases, passwords, or any
                authentication tokens associated with your {platformName}{" "}
                account or linked wallet. Do not share access to your account
                with others. You are responsible for all activities that occur
                under your account, whether or not authorized by you. We are not
                liable for any loss or damage arising from your failure to
                secure your account.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Eligibility – Age Requirement:
              </h3>
              <p>
                You must be a legal adult to use {platformName}. By creating an
                account or otherwise using the Platform, you represent that you
                are at least 18 years of age (or the age of majority in your
                country of residence, if higher). Minors (under 18 years old)
                are strictly not permitted to use the Platform, even with
                parental or guardian consent. If we discover or have reason to
                believe that an account is being used by a minor, we reserve the
                right to suspend or terminate that account.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Eligibility – Legal Compliance:
              </h3>
              <p>
                You also represent that you are not barred from using the
                Platform under any applicable laws. This means, for example,
                that you are not located in, a citizen of, or under the control
                of any country or region subject to trade embargoes or
                comprehensive sanctions, and you are not on any government list
                of prohibited or restricted parties. The Platform may not be
                available in certain jurisdictions, and we may restrict or
                disable accounts that violate export control, sanctions, or
                other legal requirements. You agree to use {platformName} only
                in compliance with all applicable laws and regulations.
              </p>
            </div>
          </li>

          {/* 4. Ownership and Tokenization of Game Licenses */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ownership and Tokenization of Game Licenses
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Game Licenses:
              </h3>
              <p>
                When you purchase a game on {platformName}, you are acquiring a
                license to access and play that game, represented by a unique
                smart contract on the {platformName} Chain. This game license
                token is a digital token that proves your ownership of a valid
                license for the associated game. Holding the license entitles
                you to download, install, and play the game through the
                Platform, subject to these Terms and any end-user license terms
                of the game’s developer or publisher.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Transfer and Resale of Licenses:
              </h3>
              <p>
                Because game licenses are tokenized, you have the technical
                ability to transfer, sell, or gift your game license to other
                users. Ownership of the license determines who can play play the
                game. {platformName} facilitates a marketplace where you can
                list your game license for sale to other users. Transferring a
                game license will automatically transfer the game access rights
                to the new holder. By initiating any transfer or resale, you
                represent that the transaction is legitimate and that you have
                the right to transfer the license. The recipient must have (or
                create) a {platformName} account to utilize the license.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                On-Platform Use Encouraged:
              </h3>
              <p>
                While the representing game licenses are transferable in theory,
                you are strongly encouraged to keep your game license within{" "}
                {platformName}’s ecosystem (i.e., on the {platformName} Chain
                and within your Platform account). The Platform is designed to
                recognize and support licenses on the {platformName} Chain.
                Transferring or trading these outside of the official Platform
                environment (for instance, via unauthorized marketplaces or by
                moving the token to an external wallet not linked to your{" "}
                {platformName} account) is not recommended. Doing so may result
                in loss of functionality, as off-platform holders may not be
                able to download or play the associated game. We do not
                guarantee or provide support for game license once they are
                outside the Platform’s authorized ecosystem. Any purchase, sale,
                or transfer of these tokens that occurs outside of{" "}
                {platformName}’s official marketplace is at your own risk. The
                Company assumes no responsibility for losses, thefts, or any
                issues arising from off-platform transactions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                No Proprietary Rights in Game Content:
              </h3>
              <p>
                Owning a game license does not mean you own the game itself or
                any intellectual property in the game. What you obtain is a
                personal, limited license to download and play the game content.
                All copyright and intellectual property rights in the games
                remain with the game developers or rights holders. You may not
                reproduce, distribute, publicly perform, modify, or create
                derivative works from any game content beyond what is permitted
                by law or expressly allowed by the game’s license. The license
                cannot be used to circumvent or violate any additional terms set
                by the game’s developer (for example, the game’s End User
                License Agreement). If you transfer your license to another
                user, your own right to play that game through the Platform is
                terminated, and only the new owner will have access.
              </p>
            </div>
          </li>

          {/* 5. Game Content and Developer Integration */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Game Content and Developer Integration
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Third-Party and Proprietary Games:
              </h3>
              <p>
                {platformName} hosts a variety of digital games, including those
                developed by third-party developers/publishers as well as games
                created or published by {platformName} (“proprietary games”).
                While we facilitate distribution, each game’s content,
                functionality, and support are the responsibility of the
                respective game developer or publisher. Games made available on
                the Platform may also be subject to their own end-user license
                agreements or terms of use presented by the game’s provider,
                which you may need to accept before playing. Such game-specific
                terms are between you and the game’s provider; however, they
                must not conflict with these Platform Terms, and these Terms
                will apply to your use of the Platform in all cases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Developer Integration Requirements:
              </h3>
              <p>
                In order for any game to be distributed and function on{" "}
                {platformName}, the game’s developer must integrate our{" "}
                {platformName} blockchain plugin/SDK into their game or
                distribution process. This integration ensures that the game
                will check for a valid {platformName} license before allowing
                play, and that in-game or online features can verify license
                ownership as needed. Game developers who wish to publish on the
                Platform must comply with our integration guidelines and
                developer terms (which may be provided separately). We reserve
                the right to remove or refuse to list any game that does not
                properly implement our licensing system or that violates our
                content standards or policies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Desktop Client and Game Access:
              </h3>
              <p>
                Users must use the official {platformName} desktop client (or
                any authorized applications we provide) to download, install,
                and launch games acquired through the Platform. The client
                software is designed to manage your game library and enforce
                license requirements by communicating with the {platformName}{" "}
                blockchain.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                License Verification:
              </h3>
              <p>
                You understand that any attempt to bypass or circumvent the
                license verification is a violation of these Terms and may
                result in suspension of your account or other legal
                consequences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Content Standards and Availability:
              </h3>
              <p>
                We strive to provide a safe and enjoyable environment. Game
                content available on {platformName} must adhere to applicable
                laws and our content guidelines. However, you understand that
                some games may include mature content or other material that
                might not be suitable for all audiences. We do not guarantee
                that any particular game will always be available on the
                Platform; games may be removed or become unavailable due to
                developer decisions, legal requirements, or other reasons. If a
                game you purchased is removed from {platformName}, we will,
                where possible, allow existing token holders to continue to
                access downloads or past versions, but this cannot be guaranteed
                (especially if removal was for legal reasons or at the
                developer’s request).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Third-Party Content and Links:
              </h3>
              <p>
                The Platform may also display content such as game descriptions,
                images, videos, reviews, or links provided by third parties
                (developers or other users). We do not pre-screen all such
                content, and thus we do not endorse or guarantee the accuracy,
                quality, or legality of third-party content. If you as a user
                post any content (e.g., reviews or forum posts, if such features
                exist on {platformName}), you must do so in accordance with our
                community guidelines and ensure you have the rights to that
                content. We have the right to remove or disable content that
                violates our policies or the law.
              </p>
            </div>
          </li>

          {/* 6. Fees and Payments */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Fees and Payments
            </h2>
            <p>
              Using {platformName} involves various fees and financial
              transactions. By conducting any transaction on the Platform, you
              agree to the following fee and payment terms:
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Game Prices:
              </h3>
              <p>
                The price for each game (in fiat currency, cryptocurrency, or
                other payment method as indicated) will be displayed at the
                point of purchase. You must have a sufficient balance or provide
                a valid payment method to complete a purchase. All prices are
                subject to change, and promotional pricing or discounts may be
                offered at our discretion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Blockchain Transaction Fees:
              </h3>
              <p>
                Blockchain network fees (‘‘gas’’ or transaction costs) apply to
                all transactions on the {platformName} Chain. This includes
                buying a new game license, transferring a license to another
                user, or executing any other blockchain-recorded action. These
                fees are typically small amounts of cryptocurrency required to
                power the network’s operation. You are responsible for paying
                any such fees at the time of the transaction. Fees may fluctuate
                based on network usage, and {platformName} has no control over
                these underlying blockchain costs. We will attempt to inform you
                of the applicable network fee before you confirm a transaction,
                but you acknowledge that such fees can change rapidly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Marketplace Sales &amp; Royalties:
              </h3>
              <p>
                When you resell a game license to another user through our
                Platform’s marketplace, a marketplace fee will be deducted
                automatically from the sale proceeds. This fee is used to
                support the Platform’s operations (a portion of it goes to{" "}
                {platformName}) and to reward the game’s developer/publisher (a
                royalty to support ongoing development). The exact fee and
                royalty percentages will be disclosed to you at the time of
                listing or sale (for example, “10% platform fee and 5% developer
                royalty”). By listing a license for sale, you agree to the
                deduction of these fees upon a successful sale. The remaining
                net sale proceeds will be transferred to you (typically in the
                form of platform-supported currency or tokens).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Game Listing and Publishing Fees:
              </h3>
              <p>
                If you are a game developer or publisher listing a new game on{" "}
                {platformName}, there may be a listing fee or minting fee
                required to tokenize your game licenses on the blockchain. Such
                fees cover the cost of creating licenses and hosting the game on
                our Platform. These fees, if applicable, will be communicated in
                our developer onboarding materials or agreements. Developers are
                responsible for any such fees and must pay them as a condition
                of listing their game.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                No Refund on Fees:
              </h3>
              <p>
                All fees and payments are generally non-refundable. For example,
                if a blockchain transaction fails or a game is later removed,
                network fees already spent cannot be refunded by us (since they
                are consumed by the blockchain, not retained by {platformName}
                ). Similarly, listing fees or marketplace fees are not
                refundable once the service has been rendered, except in cases
                of error clearly attributable to us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Taxes:</h3>
              <p>
                You are responsible for any taxes, duties, or similar
                governmental charges (collectively, “Taxes”) that may be imposed
                on your transactions or use of the Platform, including sales,
                use, value-added, or cryptocurrency transaction taxes.{" "}
                {platformName} will charge Taxes when required to do so by law
                (for instance, withholding applicable sales tax/VAT on game
                purchases for users in certain jurisdictions). Any applicable
                Taxes (if not included in the purchase price) will be shown to
                you before finalizing a transaction. You agree to indemnify and
                hold us harmless from any claims or penalties imposed on us by a
                tax authority due to your failure to pay Taxes associated with
                your use of the Platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Payment Methods:
              </h3>
              <p>
                We may support various payment methods (e.g., credit cards, bank
                transfers, cryptocurrencies, or our own platform tokens) to
                facilitate purchases. The availability of certain payment
                methods may depend on your location. By providing payment
                information, you represent that you are authorized to use the
                payment method. You authorize us (or our payment processor) to
                charge your payment method for the full amount of your purchase
                (including any taxes and fees). If your payment fails or is
                later reversed (e.g., in a chargeback), we reserve the right to
                revoke the associated game license or recover the amount owed
                from you by other legal means.
              </p>
            </div>
            <p>
              We reserve the right to change our fee structure or introduce new
              fees from time to time. If we do so, we will provide advance
              notice through the Platform or via email/notification to users, in
              accordance with applicable laws. Your continued use of the
              Platform or engaging in transactions after the effective date of
              fee changes constitutes acceptance of the new fees.
            </p>
          </li>

          {/* 7. Refunds and Disputes */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Refunds and Disputes
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                No Platform-Issued Refunds:
              </h3>
              <p>
                All sales of digital game licenses on {platformName} are final.{" "}
                {platformName} does not provide refunds or returns for purchases
                of game license or other digital items. Once you purchase a game
                (and the corresponding license is delivered to your account),
                that transaction is complete and irreversible. Because the value
                and ownership of the game license can be transferred by you to
                someone else via resale, traditional “refunds” by the Platform
                are not applicable. (For instance, unlike physical goods,
                digital assets cannot be returned to us in exchange for a refund
                — your recourse if dissatisfied is to resell the license in the
                marketplace.)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Developer Refund Policies:
              </h3>
              <p>
                Any refund, exchange, or credit for game purchases is at the
                sole discretion of the game’s developer or publisher. Some
                developers may choose to offer limited warranties or
                satisfaction guarantees for their content, but any such promises
                will be governed by the developer’s own policies and terms, not
                by {platformName}. You should review the store page or
                documentation of a game to see if the developer provides any
                refund or trial period. {companyLegalName} is not responsible
                for enforcing or honoring any third-party refund policies. If a
                developer issues a refund to you outside of the Platform (for
                example, by purchasing the license back from you or issuing you
                a different key), that is solely between you and the developer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Transaction Disputes Between Users:
              </h3>
              <p>
                In the event of a dispute between users (for example, a
                disagreement between a buyer and a seller in a resale
                transaction), {platformName} may (but is not obligated to)
                assist in mediating the issue. Because blockchain transactions
                are designed to be trustless and final, there is limited
                recourse once a transaction is completed. We encourage users to
                communicate clearly and verify details (game version, price,
                etc.) before completing peer-to-peer transactions on the
                marketplace. If a user is suspected of fraud, scam, or violating
                these Terms during a transaction, please report it to us. We
                reserve the right to suspend or investigate accounts involved in
                disputes or fraudulent behavior, and to cooperate with law
                enforcement as needed. However, any financial resolution of a
                dispute (such as returning a mistakenly sent payment) will
                generally not be facilitated by {companyLegalName} due to the
                irreversibility of blockchain transactions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Disputes with {companyLegalName}:
              </h3>
              <p>
                If you have a dispute or issue directly with us or our Platform
                (for example, your account being unexpectedly suspended, or an
                alleged breach of these Terms by the Company), please contact
                our support team at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>{" "}
                to attempt an informal resolution. We aim to respond and address
                user concerns in good faith. If we cannot resolve the dispute
                informally, the provisions in the Legal and Jurisdiction section
                below will apply regarding formal dispute resolution, governing
                law, and venue.
              </p>
            </div>
          </li>

          {/* 8. Data and Privacy */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Data and Privacy
            </h2>
            <p>
              Your privacy is important to us. Our collection and use of
              personal data in connection with the Platform are described in our
              Privacy Policy, which is hereby incorporated into these Terms by
              reference. By using {platformName}, you acknowledge that you have
              read and understood our Privacy Policy and agree to the
              collection, use, storage, and disclosure of your information as
              described therein. Key points include:
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Data Collection:
              </h3>
              <p>
                We collect the minimal personal data necessary to provide the
                service. When you create a {platformName} account, if you choose
                not to provide an email or name, we may identify your account
                solely via a blockchain address or an automatically generated
                user ID. Nonetheless, the Platform may automatically collect
                certain information: for example, device information, IP
                address, usage statistics, and transactional records on the{" "}
                {platformName} Chain (such as your game purchases and sales). If
                you do provide personal details (such as contact information or
                payment details), we will also collect and store that
                information securely.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Use of Data:
              </h3>
              <p>
                Personal data is used to operate and improve the Platform, to
                process transactions, to provide customer support, and to comply
                with legal obligations (such as anti-fraud, KYC/AML requirements
                if applicable, or responding to lawful requests by authorities).
                We do not sell your personal information to third parties. We
                may share data with third-party service providers as needed to
                operate the Platform (for example, payment processors or cloud
                hosting services), under strict obligations of confidentiality
                and security.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                GDPR Compliance:
              </h3>
              <p>
                If you are located in the European Economic Area (EEA) or other
                regions with similar laws, you have certain rights under the EU
                General Data Protection Regulation (GDPR). These include the
                right to access personal data we hold about you, the right to
                request correction or deletion of your data, the right to
                restrict or object to certain processing of your data, and the
                right to data portability. {companyLegalName} acts as the “Data
                Controller” for personal data processed in the context of the
                Platform. We rely on lawful bases outlined in our Privacy Policy
                to process data (for example, your consent, performance of a
                contract (providing the service to you), or our legitimate
                interests in maintaining security and improving the service). If
                you wish to exercise any GDPR rights, you can contact us at{" "}
                <a
                  href={`mailto:${privacyContactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {privacyContactEmail}
                </a>
                . You also have the right to lodge a complaint with an EU data
                protection authority if you believe we have violated your
                privacy rights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                CCPA Compliance:
              </h3>
              <p>
                If you are a California resident, the California Consumer
                Privacy Act (CCPA) (as amended by the CPRA) provides you with
                specific rights regarding your personal information. These
                include the right to know what personal information is
                collected, used, shared, or sold, the right to delete personal
                information (with some exceptions), the right to opt-out of the
                sale or sharing of personal information, and the right to
                non-discrimination for exercising your privacy rights. Our
                Privacy Policy details how we comply with CCPA requirements.{" "}
                {companyLegalName} does not sell personal data in the
                traditional sense; however, we still provide a “Do Not Sell or
                Share My Personal Information” link or mechanism on our website
                to allow California users to exercise their opt-out rights.
                California users can also designate an authorized agent to make
                requests on their behalf. For CCPA requests, contact us at{" "}
                <a
                  href={`mailto:${privacyContactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {privacyContactEmail}
                </a>{" "}
                or use the web form provided in our Privacy Policy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Data Security:
              </h3>
              <p>
                We implement industry-standard security measures to protect your
                personal data and account information. However, no method of
                transmission or storage is 100% secure. By using the Platform,
                you acknowledge that there is always some risk of data
                incidents. In the event of a data breach that affects your
                personal information, we will notify you and the relevant
                authorities as required by law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Retention and Deletion:
              </h3>
              <p>
                We retain personal data only as long as necessary to fulfill the
                purposes for which it was collected, or as required by law. If
                you choose to delete your account (or if we terminate your
                account), we will delete or anonymize your personal information
                within a reasonable timeframe, except for data we are required
                or permitted to retain (for example, transaction records for
                auditing, or logs needed for security and fraud prevention).
              </p>
            </div>
            <p>
              For full details, please review the Privacy Policy. By agreeing to
              these Terms, you also agree that you have consented to our privacy
              practices as described therein. If you do not agree with our data
              handling practices, please do not use the Platform. We take
              compliance with privacy laws seriously and are committed to
              protecting your personal information.
            </p>
          </li>

          {/* 9. Legal and Jurisdiction */}
          <li className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Legal and Jurisdiction
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Acceptable Use and Conduct:
              </h3>
              <p>
                By using {platformName}, you agree to use the Platform lawfully
                and respectfully. You must not misuse the service or engage in
                any activity that is illegal, fraudulent, harassing, infringing,
                or otherwise harmful. This includes (but is not limited to)
                refraining from attempting to hack or exploit the Platform, not
                distributing malware or illicit content, not engaging in
                harassment or hate speech towards others, and not violating any
                third-party rights. We reserve the right to investigate and take
                appropriate action (including suspension or termination of
                accounts and legal action) against any user who, in our
                judgment, violates this provision or any other part of these
                Terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Intellectual Property – Platform:
              </h3>
              <p>
                All rights, title, and interest in the {platformName} Platform,
                website, software, and branding (including but not limited to
                the code, design, logos, graphics, information, compiled
                content, and underlying technology – collectively, the “Platform
                Materials”) are owned by {platformName} or its licensors. These
                materials are protected by intellectual property laws and
                treaties. {companyLegalName} grants you a limited,
                non-exclusive, non-transferable, revocable license to access and
                use the Platform Materials for their intended purpose (for
                example, using the client software to purchase and play games)
                and for personal, non-commercial use only. You may not: copy,
                modify, distribute, or create derivative works based on the
                Platform Materials; reverse engineer, decompile, or attempt to
                extract source code from the Platform software (except to the
                extent that such activity is expressly permitted by applicable
                law notwithstanding this limitation); or remove or obscure any
                copyright, trademark, or other proprietary notices on the
                Platform. All {platformName} names, logos, and related
                trademarks are the property of {companyLegalName} (or its
                partners, in the case of specific game titles or content); this
                Agreement does not grant you any rights to use our trademarks
                except as necessary for you to use the Platform in accordance
                with these Terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Intellectual Property – User &amp; Developer Content:
              </h3>
              <p>
                <strong>User-Generated Content:</strong> If the Platform allows
                you to contribute content (such as profile information, reviews,
                forums, chats, etc.), you retain ownership of that content.
                However, by posting or transmitting any content via{" "}
                {platformName}, you grant {companyLegalName} a worldwide,
                royalty-free, sublicensable license to use, copy, modify,
                display, distribute, and create derivative works from your
                content in connection with operating and marketing the Platform.
                Please only post content that you have the right to share. We
                have the discretion to remove any content that violates these
                Terms or any law.
              </p>
              <p>
                <strong>Developer Content:</strong> Game developers publishing
                on {platformName} retain ownership of their game content and
                associated intellectual property. By listing a game on the
                Platform, the developer grants {companyLegalName} the rights
                necessary to host, reproduce, distribute, and make the game
                available to users, as well as to use the game’s name,
                trademarks, and assets for promotional purposes on the Platform.
                Developers must ensure that their content does not violate any
                third-party IP rights and agree to indemnify {companyLegalName}{" "}
                against any claims that arise from the content they provide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Disclaimer of Warranties:
              </h3>
              <p>
                {platformName} is provided “as is” and “as available”. To the
                fullest extent permitted by law, {companyLegalName} disclaims
                all warranties and representations, express or implied,
                regarding the Platform and any games or services offered through
                it. This includes, but is not limited to, implied warranties of
                merchantability, fitness for a particular purpose, title,
                non-infringement, and any warranties that may arise from course
                of dealing or usage of trade. We do not warrant that the
                Platform or any content will be uninterrupted, error-free,
                secure, or free of viruses or other harmful components. No
                guarantee is made that games will function on your hardware or
                network, or that they will be free from defects. You assume all
                risk for any damage to your computer system, loss of data, or
                other harm that results from your access to the Platform or
                playing of any games.
              </p>
              <p>
                <strong>Blockchain Operation:</strong> You acknowledge that the
                underlying blockchain infrastructure ({platformName} Chain) is
                subject to inherent technological risks, including potential
                software bugs, distributed denial-of-service attacks,
                cryptographic weaknesses, or other unpredictable issues.{" "}
                {companyLegalName} does not guarantee the continuous,
                error-free, vulnerability-free, or secure operation of the
                blockchain network. Use of blockchain technology is at your own
                risk.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Limitation of Liability:
              </h3>
              <p>
                To the maximum extent permitted by applicable law,{" "}
                {companyLegalName} and its affiliates, officers, employees, and
                agents will not be liable for any indirect, incidental, special,
                consequential, exemplary, or punitive damages, or any loss of
                profits, revenue, data, goodwill, or other intangible losses,
                arising out of or related to your use of (or inability to use)
                the Platform, any game, or any license or transaction, even if
                we have been advised of the possibility of such damages. This
                limitation of liability applies to all causes of action, whether
                based on warranty, contract, tort (including negligence), or any
                other legal theory. In no event will our total cumulative
                liability to you for any claims arising out of or relating to
                these Terms or the Platform exceed the greater of: (a) the total
                amount you have paid to {companyLegalName} in the twelve (12)
                months prior to the event giving rise to the liability (for
                {/* example, fees paid to us for purchases or transactions), or (b){" "}
                {liabilityCapAmount} (or equivalent in local currency). The
                existence of multiple claims will not enlarge this cap. */}
                example, fees paid to us for purchases or transactions).
              </p>
              <p>
                <strong>Exceptions:</strong> Some jurisdictions do not allow the
                exclusion or limitation of certain warranties or liabilities, so
                some of the above disclaimers and limitations may not apply to
                you. In such cases, our liability will be limited to the fullest
                extent permitted by applicable law. This section is an essential
                part of the bargain between you and us, and it shall apply even
                if any limited remedy is found to have failed of its essential
                purpose.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Indemnification:
              </h3>
              <p>
                You agree to indemnify, defend, and hold harmless{" "}
                {companyLegalName}, its parent, affiliates, and their respective
                officers, directors, employees, and agents, from and against any
                and all claims, liabilities, damages, losses, and expenses
                (including reasonable attorneys’ fees and costs) arising out of
                or in any way connected with: (a) your breach of these Terms or
                any other policies incorporated herein; (b) your violation of
                any law or the rights of any third party; (c) your misuse of the
                Platform or any game; or (d) any content you submit or actions
                you take on the Platform. We reserve the right to assume the
                exclusive defense and control of any matter subject to
                indemnification by you, in which case you agree to cooperate
                with our defense of such claim. This indemnity obligation will
                survive any termination of your account or of these Terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Termination of Service:
              </h3>
              <p>
                We may, at our sole discretion, suspend or terminate your access
                to the Platform or your account (including access to your game
                library) at any time if we believe you have violated these
                Terms, engaged in fraudulent or illegal activities, or if we are
                required to do so for legal reasons. We may also suspend the
                operation of the Platform (in whole or in part) for any reason,
                including security issues, maintenance, or business
                discontinuation. If your account is terminated due to a breach
                of these Terms or law, you may lose access to any licenses or
                content associated with your account without entitlement to any
                refund or compensation (to the extent permitted by law). You may
                terminate your use of the Platform at any time by ceasing to
                access it and (if applicable) deleting the client software; you
                may also request account deletion via our support channels. Note
                that even after termination, transactions you made generally
                cannot be reversed, and information provided to other users
                (such as forum posts) may remain visible unless deleted by us.
                Provisions of these Terms which by their nature should survive
                termination (including but not limited to ownership clauses,
                warranty disclaimers, limitations of liability, indemnity, and
                governing law) shall survive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Changes to Terms:
              </h3>
              <p>
                {companyLegalName} reserves the right to modify or update these
                Terms of Service at any time. If we make material changes, we
                will notify users by posting the updated Terms on our website
                and/or through the Platform client, and updating the “Effective
                Date” at the top. In certain cases, we may also notify you via
                email or other direct communication. It is your responsibility
                to review these Terms periodically. Any changes will become
                effective no sooner than fourteen (14) days after they are
                posted (or communicated to you), except changes addressing new
                functions of the Platform or changes made for legal reasons may
                become effective immediately. If you do not agree to the revised
                Terms, you must stop using the Platform and, if applicable,
                uninstall the client. Your continued use of {platformName} after
                the effective date of the updated Terms will constitute your
                acceptance of those changes.
              </p>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Governing Law and Jurisdiction:
              </h3>
              <p>
                These Terms and any disputes arising out of or related to these
                Terms or the use of the Platform shall be governed by the laws
                of {governingJurisdiction}, without regard to its conflict of
                law principles. You and {companyLegalName} agree that the United
                Nations Convention on Contracts for the International Sale of
                Goods does not apply to this Agreement.
              </p>
              <p>
                <strong>Jurisdiction and Venue:</strong> You agree that any
                dispute, claim, or controversy between you and us that arises
                out of or relates to these Terms or your use of the Platform
                (each a “Dispute”) will be resolved exclusively in{" "}
                {courtLocation}, unless otherwise required by applicable law
                (for example, jurisdiction may be automatically assigned to your
                home country if mandated by consumer protection laws). You and{" "}
                {companyLegalName} consent to the personal jurisdiction of such
                courts. Notwithstanding this, we both retain the right to seek
                injunctive or equitable relief in any jurisdiction to prevent
                misuse of intellectual property or confidential information.
              </p>
            </div> */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Class Action Waiver:
              </h3>
              <p>
                To the extent permitted by law, you and {companyLegalName} agree
                that each may bring claims against the other only in an
                individual capacity, and not as a plaintiff or class member in
                any purported class or representative proceeding. Further,
                unless both you and {companyLegalName} agree otherwise, the
                court may not consolidate more than one person’s claims or
                otherwise preside over any form of a representative or class
                proceeding. (If applicable law does not permit enforcement of
                this clause, then it shall be severable from this Agreement and
                not affect the validity of the remaining provisions.)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Severability:
              </h3>
              <p>
                If any provision of these Terms is held to be unlawful, void, or
                for any reason unenforceable by a court of competent
                jurisdiction, then that provision shall be deemed severable from
                these Terms and shall not affect the validity and enforceability
                of the remaining provisions. The invalid provision will be
                deemed modified to the smallest extent necessary to make it
                enforceable, if possible, and if it cannot be modified, it will
                be stricken from these Terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                No Waiver:
              </h3>
              <p>
                Our failure to exercise or enforce any right or provision of
                these Terms shall not constitute a waiver of such right or
                provision. Any waiver of any provision by us must be in writing
                to be effective, and shall not mean we waive the same provision
                in the future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Entire Agreement:
              </h3>
              <p>
                These Terms (including the incorporated Privacy Policy and any
                other guidelines or additional terms we provide for specific
                services or features) constitute the entire agreement between
                you and {companyLegalName} regarding your use of {platformName},
                and supersede any prior or contemporaneous agreements,
                communications, or understandings (whether oral or written)
                relating to the subject matter hereof. You acknowledge that you
                have not relied on any representation, warranty, or promise not
                expressly stated in these Terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Assignment:
              </h3>
              <p>
                You may not assign or transfer any of your rights or obligations
                under these Terms without our prior written consent.{" "}
                {companyLegalName} may freely assign or transfer this agreement
                (in whole or in part) as part of a merger, acquisition, sale of
                assets, or by operation of law or otherwise. These Terms shall
                bind and inure to the benefit of the parties and their permitted
                successors and assigns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Relationship of Parties:
              </h3>
              <p>
                You and {companyLegalName} are independent contractors. Nothing
                in these Terms shall be construed to create any partnership,
                joint venture, employment, franchise, or agency relationship
                between you and us. You have no authority to make or accept any
                offers or representations on our behalf.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Notices:</h3>
              <p>
                We may provide notices to you under these Terms by email to any
                address you have given us, by postal mail to the address you
                provided (if any), or via postings within the Platform (such as
                notifications through the client or website). You may provide
                notices to us by email at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>{" "}
                {companyAddress && (
                  <>
                    or by registered mail at {companyAddress.line1},{" "}
                    {companyAddress.city}, {companyAddress.stateProvince}{" "}
                    {companyAddress.zipPostalCode}, {companyAddress.country}
                  </>
                )}
                . Notices sent by email will be deemed given 24 hours after the
                email is sent, and notices sent by mail will be deemed given 5
                business days after mailing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Headings and Language:
              </h3>
              <p>
                Section titles and headings in these Terms are for convenience
                only and have no legal or contractual effect. These Terms are
                written in the English language, and to the extent any
                translated version conflicts with the English version, the
                English version controls.
              </p>
            </div>
          </li>
        </ol>

        <p className="mt-8">
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-600 hover:underline"
          >
            {contactEmail}
          </a>
          . By using the {platformName} platform, you acknowledge that you have
          read, understood, and agree to all of the above terms and conditions.
          Happy gaming on {platformName}!
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

