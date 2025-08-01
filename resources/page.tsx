"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Search,
  ExternalLink,
  DollarSign,
  Compass,
  Wrench,
  FileText,
  Calculator,
  BookOpen,
  Users,
  Phone,
  Globe,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Resources", icon: <Globe className="h-4 w-4" /> },
    { id: "financial", name: "Financial Aid", icon: <DollarSign className="h-4 w-4" /> },
    { id: "career", name: "Career Exploration", icon: <Compass className="h-4 w-4" /> },
    { id: "trades", name: "Apprenticeships & Trades", icon: <Wrench className="h-4 w-4" /> },
    { id: "applications", name: "Applications & Planning", icon: <FileText className="h-4 w-4" /> },
    { id: "tools", name: "Planning Tools", icon: <Calculator className="h-4 w-4" /> },
    { id: "support", name: "Support & Counseling", icon: <Users className="h-4 w-4" /> },
  ]

  const resources = [
    // Financial Aid
    {
      category: "financial",
      name: "OSAP (Ontario Student Assistance Program)",
      url: "https://www.ontario.ca/page/osap-ontario-student-assistance-program",
      description: "Government financial aid for Ontario students including grants and loans",
      type: "Government",
      province: "Ontario",
      featured: true,
    },
    {
      category: "financial",
      name: "Canada Student Loans Program",
      url: "https://www.canada.ca/en/services/benefits/education/student-aid.html",
      description: "Federal student financial assistance available across Canada",
      type: "Government",
      province: "National",
      featured: true,
    },
    {
      category: "financial",
      name: "Scholarship Canada",
      url: "https://scholarshipcanada.com/",
      description: "Comprehensive database of Canadian scholarships and bursaries",
      type: "Database",
      province: "National",
      featured: false,
    },
    {
      category: "financial",
      name: "StudentAid BC",
      url: "https://studentaidbc.ca/",
      description: "Financial assistance for British Columbia students",
      type: "Government",
      province: "British Columbia",
      featured: false,
    },
    {
      category: "financial",
      name: "Alberta Student Aid",
      url: "https://www.alberta.ca/alberta-student-aid.aspx",
      description: "Student loans and grants for Alberta residents",
      type: "Government",
      province: "Alberta",
      featured: false,
    },

    // Career Exploration
    {
      category: "career",
      name: "Job Bank Canada",
      url: "https://www.jobbank.gc.ca/",
      description: "Government job search and career exploration tool with salary information",
      type: "Government",
      province: "National",
      featured: true,
    },
    {
      category: "career",
      name: "Career Quiz - Government of Canada",
      url: "https://www.jobbank.gc.ca/career-planning/quizzes",
      description: "Discover careers that match your interests and skills",
      type: "Assessment",
      province: "National",
      featured: true,
    },
    {
      category: "career",
      name: "NOC (National Occupational Classification)",
      url: "https://noc.esdc.gc.ca/",
      description: "Explore different career paths, requirements, and job prospects",
      type: "Database",
      province: "National",
      featured: false,
    },
    {
      category: "career",
      name: "WorkBC Career Compass",
      url: "https://www.workbc.ca/career-compass",
      description: "Career exploration tool for British Columbia students",
      type: "Assessment",
      province: "British Columbia",
      featured: false,
    },

    // Apprenticeships & Trades
    {
      category: "trades",
      name: "Ontario College of Trades",
      url: "https://trades.ontariocolleges.ca/",
      description: "Information on skilled trades careers and certification in Ontario",
      type: "Organization",
      province: "Ontario",
      featured: true,
    },
    {
      category: "trades",
      name: "Red River College Polytechnic - Apprenticeship",
      url: "https://www.rrc.ca/apprenticeship/",
      description: "Comprehensive apprenticeship programs and information",
      type: "Institution",
      province: "Manitoba",
      featured: false,
    },
    {
      category: "trades",
      name: "Skilled Trades Ontario",
      url: "https://www.skilledtradesontario.ca/",
      description: "Promote skilled trades careers and connect with employers",
      type: "Organization",
      province: "Ontario",
      featured: false,
    },
    {
      category: "trades",
      name: "Industry Training Authority (BC)",
      url: "https://www.itabc.ca/",
      description: "BC's industry training and apprenticeship programs",
      type: "Government",
      province: "British Columbia",
      featured: false,
    },

    // Applications & Planning
    {
      category: "applications",
      name: "OUAC (Ontario Universities' Application Centre)",
      url: "https://www.ouac.on.ca/",
      description: "Apply to Ontario universities through the centralized application system",
      type: "Application Portal",
      province: "Ontario",
      featured: true,
    },
    {
      category: "applications",
      name: "Ontario Colleges",
      url: "https://www.ontariocolleges.ca/",
      description: "Apply to Ontario colleges and explore programs",
      type: "Application Portal",
      province: "Ontario",
      featured: true,
    },
    {
      category: "applications",
      name: "ApplyAlberta",
      url: "https://applyalberta.ca/",
      description: "Apply to Alberta post-secondary institutions",
      type: "Application Portal",
      province: "Alberta",
      featured: false,
    },
    {
      category: "applications",
      name: "Education Planner BC",
      url: "https://www.educationplannerbc.ca/",
      description: "Plan and apply for post-secondary education in BC",
      type: "Planning Tool",
      province: "British Columbia",
      featured: false,
    },

    // Planning Tools
    {
      category: "tools",
      name: "My Blueprint",
      url: "https://myblueprint.ca/",
      description: "Comprehensive education and career planning tool used in schools",
      type: "Planning Tool",
      province: "National",
      featured: true,
    },
    {
      category: "tools",
      name: "Student Budget Calculator",
      url: "https://www.rbcroyalbank.com/student/budget-calculator/",
      description: "Calculate your education costs and budget",
      type: "Calculator",
      province: "National",
      featured: false,
    },
    {
      category: "tools",
      name: "Loan Repayment Calculator",
      url: "https://apps.royalbank.com/uaw0/personalloans/payment",
      description: "Estimate your student loan payments",
      type: "Calculator",
      province: "National",
      featured: false,
    },

    // Support & Counseling
    {
      category: "support",
      name: "Kids Help Phone",
      url: "https://kidshelpphone.ca/",
      description: "24/7 support for young people including career and education guidance",
      type: "Support Service",
      province: "National",
      featured: true,
    },
    {
      category: "support",
      name: "Career Development Services",
      url: "https://www.canada.ca/en/employment-social-development/programs/career-development.html",
      description: "Government career counseling and development services",
      type: "Support Service",
      province: "National",
      featured: false,
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.province.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredResources = resources.filter((resource) => resource.featured)

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
              <Link href="/resources" className="text-blue-600 font-medium">
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
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-12 w-12 text-purple-600 mr-3" />
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-lg px-4 py-2">
                Essential Resources
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to <span className="text-purple-600">Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access trusted Canadian resources for financial aid, career exploration, applications, and planning tools.
              All the essential links and information in one place.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search resources, organizations, or provinces..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                  >
                    {category.icon}
                    <span className="ml-1">{category.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-lg text-gray-600">
              The most important resources every Canadian student should know about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredResources.map((resource, index) => (
              <Card
                key={index}
                className="border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{resource.province}</span>
                  </div>
                  <CardTitle className="text-lg flex items-center">
                    {resource.name}
                    <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Resource
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Resources</h2>
            <p className="text-lg text-gray-600">
              {filteredResources.length} resources found
              {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{resource.province}</span>
                  </div>
                  <CardTitle className="text-lg">{resource.name}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Resource
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or category filter.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links - Removed non-functional buttons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-lg text-gray-600">Direct links to essential planning tools and resources.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Budget Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Calculate your education costs and financial needs</p>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://www.rbcroyalbank.com/student/budget-calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculate Costs
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Compass className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Career Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Discover careers that match your interests and skills</p>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://www.jobbank.gc.ca/career-planning/quizzes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Take Quiz
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Get Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">24/7 support for young people</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://kidshelpphone.ca/" target="_blank" rel="noopener noreferrer">
                    Get Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
                Your comprehensive guide to Canadian post-secondary resources and opportunities.
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
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Contribute
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
              <h4 className="font-semibold mb-4">Resource Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => setSelectedCategory("financial")}
                    className="hover:text-white transition-colors"
                  >
                    Financial Aid
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedCategory("career")} className="hover:text-white transition-colors">
                    Career Exploration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("applications")}
                    className="hover:text-white transition-colors"
                  >
                    Applications
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedCategory("support")} className="hover:text-white transition-colors">
                    Support Services
                  </button>
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
