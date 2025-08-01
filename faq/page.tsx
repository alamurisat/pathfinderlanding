"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  DollarSign,
  Calendar,
  Users,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: <HelpCircle className="h-5 w-5" />,
      color: "blue",
      questions: [
        {
          id: "what-is-pathfinder",
          question: "What is PathFinder?",
          answer:
            "PathFinder is a comprehensive online platform designed to help Canadian high school students explore and navigate their post-secondary education options. We provide detailed information about universities, colleges, skilled trades, gap year programs, and direct-to-work opportunities across Canada.",
        },
        {
          id: "who-can-use",
          question: "Who can use PathFinder?",
          answer:
            "PathFinder is primarily designed for Canadian high school students who are exploring their post-secondary options. However, parents, guidance counselors, and anyone interested in Canadian education pathways can also benefit from our resources.",
        },
        {
          id: "is-it-free",
          question: "Is PathFinder free to use?",
          answer:
            "Yes! PathFinder is completely free to use. We believe that access to educational information should be available to all Canadian students regardless of their financial situation.",
        },
        {
          id: "how-current-info",
          question: "How current is the information on PathFinder?",
          answer:
            "We strive to keep all information as current as possible. Our team regularly reviews and updates content, and we encourage users to verify specific details directly with institutions as requirements and programs can change.",
        },
      ],
    },
    {
      id: "assessment",
      title: "Career Assessment",
      icon: <Users className="h-5 w-5" />,
      color: "green",
      questions: [
        {
          id: "how-assessment-works",
          question: "How does the career assessment work?",
          answer:
            "Our career assessment asks you questions about your interests, strengths, values, and preferences. Based on your responses, we provide personalized recommendations for career paths and educational programs that align with your profile.",
        },
        {
          id: "assessment-accuracy",
          question: "How accurate are the assessment results?",
          answer:
            "Our assessment is designed to provide helpful guidance based on your responses. While it's a valuable starting point, we recommend using the results as one factor in your decision-making process alongside other research, conversations with counselors, and personal reflection.",
        },
        {
          id: "retake-assessment",
          question: "Can I retake the assessment?",
          answer:
            "Yes! You can retake the assessment at any time. Your interests and goals may change as you learn more about yourself and different career options, so we encourage you to revisit the assessment periodically.",
        },
      ],
    },
    {
      id: "pathways",
      title: "Educational Pathways",
      icon: <BookOpen className="h-5 w-5" />,
      color: "purple",
      questions: [
        {
          id: "difference-university-college",
          question: "What's the difference between university and college in Canada?",
          answer:
            "Universities typically offer degree programs (bachelor's, master's, PhD) with a focus on academic and theoretical learning. Colleges offer diplomas, certificates, and applied degree programs with more hands-on, practical training. Both are valuable paths depending on your career goals.",
        },
        {
          id: "skilled-trades-requirements",
          question: "What are the requirements for skilled trades programs?",
          answer:
            "Requirements vary by trade and province, but typically include a high school diploma or equivalent. Some trades may require specific courses (like math or science). Most trades involve apprenticeship programs combining classroom learning with on-the-job training.",
        },
        {
          id: "gap-year-benefits",
          question: "What are the benefits of taking a gap year?",
          answer:
            "A gap year can provide valuable life experience, help you clarify your goals, develop independence, gain work experience, learn new skills, and potentially save money for education. It can also help you make more informed decisions about your future education and career path.",
        },
        {
          id: "transfer-between-programs",
          question: "Can I transfer between different types of programs?",
          answer:
            "Yes, many pathways allow for transfers. You can often transfer from college to university, change programs within an institution, or pursue additional credentials later. Many colleges have transfer agreements with universities, and some trades can lead to further education opportunities.",
        },
      ],
    },
    {
      id: "financial",
      title: "Financial Aid & Costs",
      icon: <DollarSign className="h-5 w-5" />,
      color: "yellow",
      questions: [
        {
          id: "education-costs",
          question: "How much does post-secondary education cost in Canada?",
          answer:
            "Costs vary significantly by institution and program. University tuition ranges from $6,000-$15,000+ per year for Canadian students. College programs typically cost $3,000-$8,000 per year. Don't forget to budget for books, supplies, and living expenses. Many skilled trades programs are shorter and less expensive.",
        },
        {
          id: "financial-aid-available",
          question: "What financial aid is available?",
          answer:
            "Canada offers various financial aid options including government student loans (like OSAP in Ontario), grants, bursaries, and scholarships. Many institutions also offer their own financial aid programs. Work-study programs and co-op opportunities can also help offset costs.",
        },
        {
          id: "apply-financial-aid",
          question: "How do I apply for financial aid?",
          answer:
            "Start by researching your provincial student aid program (like OSAP, StudentAid BC, etc.). Applications typically open in the spring for the following academic year. You'll need to provide financial information and may need to reapply each year. Also research scholarships and bursaries offered by individual institutions.",
        },
        {
          id: "working-while-studying",
          question: "Can I work while studying?",
          answer:
            "Yes! Many students work part-time during their studies. Co-op programs integrate work experience into your education. Some programs offer work-study opportunities on campus. Just ensure you can balance work with your academic responsibilities.",
        },
      ],
    },
    {
      id: "applications",
      title: "Applications & Deadlines",
      icon: <Calendar className="h-5 w-5" />,
      color: "red",
      questions: [
        {
          id: "application-deadlines",
          question: "When are application deadlines?",
          answer:
            "Deadlines vary by institution and program. University applications typically have deadlines between December and March for fall admission. College applications may have later deadlines or rolling admissions. Some competitive programs have earlier deadlines. Always check specific program requirements.",
        },
        {
          id: "application-requirements",
          question: "What do I need to include in my application?",
          answer:
            "Common requirements include transcripts, application forms, personal statements or essays, letters of recommendation, and sometimes portfolios or auditions. Requirements vary by program and institution. Some programs may require specific prerequisite courses or minimum grades.",
        },
        {
          id: "multiple-applications",
          question: "Should I apply to multiple programs?",
          answer:
            "Yes! It's wise to apply to several programs and institutions to increase your chances of acceptance. Consider applying to a mix of programs that match your interests and qualifications, including some 'safety' options where you're likely to be accepted.",
        },
        {
          id: "application-fees",
          question: "Are there application fees?",
          answer:
            "Most institutions charge application fees, typically ranging from $50-$200 per application. Some provinces have centralized application systems (like OUAC in Ontario) that may have different fee structures. Fee waivers may be available for students with financial need.",
        },
      ],
    },
    {
      id: "platform",
      title: "Using PathFinder",
      icon: <MessageCircle className="h-5 w-5" />,
      color: "indigo",
      questions: [
        {
          id: "navigate-platform",
          question: "How do I navigate the PathFinder platform?",
          answer:
            "Use the main navigation menu to explore different sections: Pathways (for all education options), Career Paths (for career information), Resources (for tools and links), and Contribute (to share your experiences). Use the search function to find specific information quickly.",
        },
        {
          id: "contribute-information",
          question: "How can I contribute information to PathFinder?",
          answer:
            "Visit our Contribute page to share your experiences, tips, or information about programs. All contributions are reviewed before being published to ensure accuracy and helpfulness. Your insights could help other students make informed decisions.",
        },
        {
          id: "report-outdated-info",
          question: "What if I find outdated or incorrect information?",
          answer:
            "Please contact us through our Contact page to report any outdated or incorrect information. We appreciate user feedback and work quickly to update our content to ensure accuracy.",
        },
        {
          id: "get-personalized-help",
          question: "Can I get personalized help with my education planning?",
          answer:
            "While PathFinder provides comprehensive information and assessment tools, we recommend speaking with your school's guidance counselor for personalized advice. You can also contact us with specific questions, and we'll do our best to point you in the right direction.",
        },
      ],
    },
  ]

  const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((q) => ({ ...q, categoryId: category.id, categoryTitle: category.title })),
  )

  const filteredQuestions = allQuestions.filter(
    (q) =>
      searchTerm === "" ||
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">PathFinder</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/pathways" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pathways
              </Link>
              <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                Career Paths
              </Link>
              <Link href="/contribute" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contribute
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                Resources
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-indigo-600 mr-3" />
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 text-lg px-4 py-2">
                Frequently Asked Questions
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-indigo-600">Questions Answered</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about post-secondary education in Canada, career planning, and using the
              PathFinder platform.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {searchTerm === "" ? (
        // Show categories when not searching
        faqCategories.map((category, categoryIndex) => (
          <section key={category.id} className={`py-12 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-${category.color}-100 rounded-lg mr-4`}>{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.questions.length} questions</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <Card key={faq.id} className="border border-gray-200">
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleQuestion(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                          {expandedQuestions[faq.id] ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedQuestions[faq.id] && (
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))
      ) : (
        // Show search results
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Search Results</h2>
                <p className="text-gray-600">
                  {filteredQuestions.length} question{filteredQuestions.length !== 1 ? "s" : ""} found for "{searchTerm}
                  "
                </p>
              </div>

              {filteredQuestions.length > 0 ? (
                <div className="space-y-4">
                  {filteredQuestions.map((faq) => (
                    <Card key={faq.id} className="border border-gray-200">
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleQuestion(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {faq.categoryTitle}
                            </Badge>
                          </div>
                          {expandedQuestions[faq.id] ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedQuestions[faq.id] && (
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search terms or browse our categories above.</p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Still Have Questions */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help! Contact us directly and we'll get back to you within
            24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/get-started">Take Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">PathFinder</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Your comprehensive guide to Canadian post-secondary education and career planning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pathways" className="hover:text-white transition-colors">
                    All Pathways
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Career Paths
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PathFinder. Helping Canadian students navigate their future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
