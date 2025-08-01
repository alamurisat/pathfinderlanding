import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  BookOpen,
  Wrench,
  Plane,
  Briefcase,
  CheckCircle,
  ExternalLink,
  MapPin,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function PathfinderLanding() {
  const pathways = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "University",
      description: "4-year degree programs focusing on academic study and research",
      tips: [
        "Research programs early - applications open in fall",
        "Consider co-op programs for work experience",
        "Look into entrance scholarships and bursaries",
      ],
      checklist: [
        "Complete prerequisite courses",
        "Maintain strong grades (80%+ for competitive programs)",
        "Apply for OSAP financial aid",
        "Submit applications by deadlines",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "College",
      description: "1-3 year diploma and certificate programs with hands-on learning",
      tips: [
        "Many programs have direct industry connections",
        "Smaller class sizes mean more personalized attention",
        "Often more affordable than university",
      ],
      checklist: [
        "Research program requirements",
        "Consider location and campus facilities",
        "Look into work placement opportunities",
        "Apply early for popular programs",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Skilled Trades",
      description: "Apprenticeships and training in high-demand technical fields",
      tips: [
        "Many trades offer excellent earning potential",
        "Learn while you earn through apprenticeships",
        "High job security and demand across Canada",
      ],
      checklist: [
        "Research different trade options",
        "Find employers who hire apprentices",
        "Complete required pre-apprenticeship training",
        "Register with provincial apprenticeship office",
      ],
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Gap Year",
      description: "Take time to work, volunteer, travel, or explore interests",
      tips: [
        "Use time purposefully - work, volunteer, or learn new skills",
        "Many students return more focused and motivated",
        "Can help clarify career interests and goals",
      ],
      checklist: [
        "Set clear goals for your gap year",
        "Research volunteer or work opportunities",
        "Keep university/college applications current",
        "Stay connected with guidance counselors",
      ],
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Direct to Work",
      description: "Enter the workforce immediately with entry-level positions",
      tips: [
        "Look for employers who offer training programs",
        "Consider part-time work while upgrading skills",
        "Many successful careers start with entry-level positions",
      ],
      checklist: [
        "Update resume and practice interview skills",
        "Research entry-level opportunities in your area",
        "Consider professional development courses",
        "Network with family, friends, and community contacts",
      ],
      color: "bg-teal-50 border-teal-200",
    },
  ]

  const resources = [
    {
      category: "Financial Aid",
      items: [
        {
          name: "OSAP (Ontario Student Assistance Program)",
          url: "https://www.ontario.ca/page/osap-ontario-student-assistance-program",
          description: "Government financial aid for Ontario students",
        },
        {
          name: "Canada Student Loans",
          url: "https://www.canada.ca/en/services/benefits/education/student-aid.html",
          description: "Federal student financial assistance",
        },
        {
          name: "Scholarship Canada",
          url: "https://scholarshipcanada.com/",
          description: "Database of Canadian scholarships and bursaries",
        },
      ],
    },
    {
      category: "Career Exploration",
      items: [
        {
          name: "Job Bank Canada",
          url: "https://www.jobbank.gc.ca/",
          description: "Government job search and career exploration tool",
        },
        {
          name: "Career Quiz",
          url: "https://www.jobbank.gc.ca/career-planning/quizzes",
          description: "Discover careers that match your interests",
        },
        {
          name: "NOC (National Occupational Classification)",
          url: "https://noc.esdc.gc.ca/",
          description: "Explore different career paths and requirements",
        },
      ],
    },
    {
      category: "Apprenticeships & Trades",
      items: [
        {
          name: "Ontario College of Trades",
          url: "https://trades.ontariocolleges.ca/",
          description: "Information on skilled trades in Ontario",
        },
        {
          name: "Red River College Apprenticeship",
          url: "https://www.rrc.ca/apprenticeship/",
          description: "Apprenticeship programs and information",
        },
        {
          name: "Skilled Trades Ontario",
          url: "https://www.skilledtradesontario.ca/",
          description: "Promote skilled trades careers",
        },
      ],
    },
    {
      category: "Applications & Planning",
      items: [
        {
          name: "OUAC (Ontario Universities' Application Centre)",
          url: "https://www.ouac.on.ca/",
          description: "Apply to Ontario universities",
        },
        {
          name: "Ontario Colleges",
          url: "https://www.ontariocolleges.ca/",
          description: "Apply to Ontario colleges",
        },
        {
          name: "My Blueprint",
          url: "https://myblueprint.ca/",
          description: "Education and career planning tool",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">PathFinder</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              For Canadian High School Students
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Navigate Your Future with <span className="text-blue-600">Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pathfinder helps you explore and understand your post-secondary options. From university to trades, gap
              years to direct employment - discover the path that's right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                <Link href="/pathways">Explore Pathways</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section id="pathways" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Your Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every path has its advantages. Learn about each option to make an informed decision about your future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <Card
                key={index}
                className={`${pathway.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm">{pathway.icon}</div>
                    <CardTitle className="text-xl">{pathway.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-700">{pathway.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-1 text-yellow-500" />
                      Student Tips
                    </h4>
                    <ul className="space-y-1">
                      {pathway.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                      Key Steps
                    </h4>
                    <ul className="space-y-1">
                      {pathway.checklist.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="h-3 w-3 mr-2 mt-1 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Essential Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access trusted Canadian resources for financial aid, career exploration, and application processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-400 mt-0.5 group-hover:text-blue-600 transition-colors" />
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Plan Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your post-secondary journey. Explore our interactive tools and personalized
            guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/get-started">Start Planning Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/contact">Talk to a Counselor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Pathfinder</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping Canadian students navigate their post-secondary journey with confidence and clarity.
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
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link href="/#resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Financial Aid
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Career Quiz
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Application Help
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Student Stories
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
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
