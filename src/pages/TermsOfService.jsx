import { Link } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
// import { useTheme } from "../../components/providers/ThemeProvider"; // TODO: Implement useTheme

export default function TermsOfService() {
  // const { theme, toggleTheme } = useTheme();
  const theme = "dark";
  const toggleTheme = () => {};

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* SeoMeta placeholder */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/40 backdrop-blur-md border-b border-border/50">
        <Link to="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-sm">Back to Cohort</span>
        </Link>
        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
          {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 8, 2026</p>
        
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-[1.8]">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Cohort PCCOE ("Cohort", "the platform") at cohortpccoe.in, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform. Cohort is operated by students of Pimpri Chinchwad College of Engineering (PCCOE), Pune, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Eligibility</h2>
            <p>Cohort is designed for current students, alumni, and faculty of PCCOE. To create an account, you must authenticate using a valid Google account. Access to the platform may be subject to approval by administrators. You must be at least 16 years of age to use the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You agree to provide accurate and complete profile information.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Acceptable Use</h2>
            <p>When using Cohort, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Post content that is defamatory, harassing, threatening, or discriminatory</li>
              <li>Share another student's personal information without their consent</li>
              <li>Upload malicious software or attempt to compromise platform security</li>
              <li>Use the platform for any commercial purpose without authorization</li>
              <li>Impersonate other users, faculty, or administrators</li>
              <li>Spam communities with irrelevant or repetitive content</li>
              <li>Attempt to circumvent access controls or authentication mechanisms</li>
              <li>Use automated tools or bots to access the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. User-Generated Content</h2>
            <p>You retain ownership of content you create on Cohort, including posts, comments, and messages. By posting content, you grant Cohort a non-exclusive, royalty-free license to display, distribute, and store your content as necessary to operate the platform. You are solely responsible for the content you post and must ensure it does not violate any applicable laws or third-party rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Communities and Moderation</h2>
            <p>Cohort hosts various student communities and clubs. Community administrators have the authority to moderate content within their communities, including editing or removing posts. Platform administrators may take action against content or accounts that violate these terms, including content removal, account suspension, or permanent bans.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Messaging and Privacy</h2>
            <p>The Connect feature provides real-time messaging with encryption. While we take measures to protect message privacy, you should exercise caution when sharing sensitive information. Messages may be retained on our servers for delivery purposes. Anonymous posts on the XD (Exchange) board are designed to protect user identity, but users should be mindful that absolute anonymity cannot be guaranteed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Advertisements</h2>
            <p>Cohort may display advertisements through Google AdSense and other advertising networks. These advertisements help support platform development and maintenance. Ad placement and content are managed in compliance with Google AdSense program policies. Users may see personalized ads based on their browsing behavior, subject to their cookie and privacy preferences.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Intellectual Property</h2>
            <p>The Cohort platform, including its design, code, logos, and branding, is the intellectual property of its creators. You may not reproduce, distribute, or create derivative works from any part of the platform without explicit written permission. All trademarks, logos, and brand names used on the platform belong to their respective owners.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Limitation of Liability</h2>
            <p>Cohort is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the platform, including but not limited to data loss, service interruptions, or content posted by other users. The platform is a student project and should not be relied upon as a critical communication tool.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Modifications</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of the platform after changes constitutes acceptance of the modified terms. We will make reasonable efforts to notify users of significant changes through platform notifications or email.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of the platform shall be subject to the jurisdiction of courts in Pune, Maharashtra, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">13. Contact</h2>
            <p>For any questions regarding these Terms of Service, please contact us at:</p>
            <p className="mt-2">
              <strong className="text-foreground">Email:</strong> chiragferwani@gmail.com<br />
              <strong className="text-foreground">Platform:</strong> Dashboard &rarr; Contact Us
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
