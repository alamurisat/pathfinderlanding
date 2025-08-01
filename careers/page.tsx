"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Scale,
  Heart,
  Wrench,
  DollarSign,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    business: true,
    law: false,
    medicine: false,
    engineering: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const careerFields = {
    business: {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      color: "blue",
      title: "Business & Commerce",
      description: "Leadership, entrepreneurship, and corporate strategy",
      whatTheyDo:
        "Business professionals manage organizations, develop strategies, analyze markets, and drive growth. They work in various sectors including finance, marketing, operations, human resources, and consulting.",
      pathways: [
        "Bachelor of Business Administration (BBA)",
        "Bachelor of Commerce (BCom)",
        "Bachelor of Economics",
        "Master of Business Administration (MBA)",
        "Specialized programs in Finance, Marketing, HR, etc.",
      ],
      topSchools: [
        { name: "University of Toronto - Rotman", specialty: "Finance & Strategy", province: "Ontario" },
        { name: "University of British Columbia - Sauder", specialty: "Entrepreneurship", province: "BC" },
        { name: "McGill University - Desautels", specialty: "International Business", province: "Quebec" },
        { name: "Queen's University - Smith", specialty: "MBA Programs", province: "Ontario" },
        { name: "Western University - Ivey", specialty: "Case-based Learning", province: "Ontario" },
        { name: "University of Alberta", specialty: "Energy Business", province: "Alberta" },
      ],
      successTips: [
        "Develop strong analytical and communication skills",
        "Gain practical experience through internships and co-ops",
        "Build a professional network early",
        "Stay updated on market trends and business news",
        "Consider specializing in a specific area (finance, marketing, etc.)",
        "Develop leadership skills through extracurricular activities",
      ],
      careerOptions: [
        { role: "Financial Analyst", salary: "$45,000 - $75,000", outlook: "Growing" },
        { role: "Marketing Manager", salary: "$55,000 - $90,000", outlook: "Stable" },
        { role: "Business Consultant", salary: "$60,000 - $120,000", outlook: "Growing" },
        { role: "Operations Manager", salary: "$50,000 - $85,000", outlook: "Stable" },
        { role: "Investment Banker", salary: "$80,000 - $150,000+", outlook: "Competitive" },
        { role: "Entrepreneur/Business Owner", salary: "Variable", outlook: "Self-determined" },
      ],
    },
    law: {
      icon: <Scale className="h-8 w-8 text-purple-600" />,
      color: "purple",
      title: "Law & Legal Studies",
      description: "Justice, advocacy, and legal expertise",
      whatTheyDo:
        "Legal professionals interpret laws, represent clients, provide legal advice, and work within the justice system. They may specialize in areas like corporate law, criminal law, family law, or public interest law.",
      pathways: [
        "Bachelor's degree (any field) + LSAT",
        "Juris Doctor (JD) - 3 years",
        "Bar admission in your province",
        "Optional: Master of Laws (LLM) for specialization",
        "Articling period (varies by province)",
      ],
      topSchools: [
        { name: "University of Toronto", specialty: "Corporate & Constitutional Law", province: "Ontario" },
        { name: "McGill University", specialty: "Civil & Common Law", province: "Quebec" },
        { name: "University of British Columbia", specialty: "Environmental & Indigenous Law", province: "BC" },
        { name: "Osgoode Hall - York University", specialty: "Public Interest Law", province: "Ontario" },
        { name: "University of Ottawa", specialty: "Bilingual Legal Education", province: "Ontario" },
        { name: "Dalhousie University", specialty: "Maritime & Health Law", province: "Nova Scotia" },
      ],
      successTips: [
        "Maintain excellent grades (law school is highly competitive)",
        "Develop strong writing and analytical skills",
        "Gain experience through moot court competitions",
        "Volunteer with legal aid or community organizations",
        "Network with legal professionals and alumni",
        "Consider specializing in a growing area of law",
        "Prepare thoroughly for the LSAT exam",
      ],
      careerOptions: [
        { role: "Corporate Lawyer", salary: "$70,000 - $200,000+", outlook: "Stable" },
        { role: "Criminal Defense Lawyer", salary: "$50,000 - $150,000", outlook: "Stable" },
        { role: "Family Lawyer", salary: "$55,000 - $120,000", outlook: "Growing" },
        { role: "Government Lawyer", salary: "$60,000 - $130,000", outlook: "Stable" },
        { role: "Legal Aid Lawyer", salary: "$45,000 - $80,000", outlook: "Needed" },
        { role: "Judge", salary: "$200,000 - $400,000+", outlook: "Limited openings" },
      ],
    },
    medicine: {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      color: "red",
      title: "Medicine & Healthcare",
      description: "Healing, research, and patient care",
      whatTheyDo:
        "Medical professionals diagnose and treat illnesses, conduct research, and promote health. They work in hospitals, clinics, research facilities, and public health organizations, specializing in various areas of medicine.",
      pathways: [
        "Bachelor's degree with pre-med requirements",
        "MCAT exam",
        "Doctor of Medicine (MD) - 4 years",
        "Residency training (2-7 years depending on specialty)",
        "Optional: Fellowship for subspecialization",
        "Medical licensing in your province",
      ],
      topSchools: [
        { name: "University of Toronto", specialty: "Research & Clinical Excellence", province: "Ontario" },
        { name: "McGill University", specialty: "Global Health & Research", province: "Quebec" },
        { name: "University of British Columbia", specialty: "Rural & Indigenous Health", province: "BC" },
        { name: "McMaster University", specialty: "Problem-based Learning", province: "Ontario" },
        { name: "University of Alberta", specialty: "Medical Research", province: "Alberta" },
        { name: "Dalhousie University", specialty: "Maritime Health", province: "Nova Scotia" },
      ],
      successTips: [
        "Excel in sciences (biology, chemistry, physics)",
        "Gain healthcare experience through volunteering",
        "Develop strong interpersonal and communication skills",
        "Prepare extensively for the MCAT",
        "Maintain excellent grades throughout undergrad",
        "Show commitment to service and helping others",
        "Consider research opportunities",
        "Be prepared for a long educational journey",
      ],
      careerOptions: [
        { role: "Family Physician", salary: "$200,000 - $300,000", outlook: "High demand" },
        { role: "Specialist (Cardiology, etc.)", salary: "$300,000 - $600,000+", outlook: "High demand" },
        { role: "Surgeon", salary: "$400,000 - $800,000+", outlook: "Competitive" },
        { role: "Emergency Medicine", salary: "$250,000 - $400,000", outlook: "High demand" },
        { role: "Psychiatrist", salary: "$200,000 - $400,000", outlook: "Growing demand" },
        { role: "Medical Researcher", salary: "$80,000 - $200,000", outlook: "Stable" },
      ],
    },
    engineering: {
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      color: "orange",
      title: "Engineering & Technology",
      description: "Innovation, problem-solving, and technical design",
      whatTheyDo:
        "Engineers design, build, and maintain systems, structures, and technologies that solve real-world problems. They work in diverse fields including software, civil infrastructure, aerospace, biomedical, and environmental engineering.",
      pathways: [
        "Bachelor of Engineering (BEng) or Applied Science (BASc) - 4 years",
        "Professional Engineer (P.Eng) designation",
        "Optional: Master's or PhD for specialization",
        "Co-op programs highly recommended",
        "Continuous professional development",
      ],
      topSchools: [
        { name: "University of Waterloo", specialty: "Software & Computer Engineering", province: "Ontario" },
        { name: "University of Toronto", specialty: "Aerospace & Biomedical", province: "Ontario" },
        { name: "University of British Columbia", specialty: "Civil & Environmental", province: "BC" },
        { name: "McGill University", specialty: "Materials & Chemical", province: "Quebec" },
        { name: "University of Alberta", specialty: "Petroleum & Mining", province: "Alberta" },
        { name: "Queen's University", specialty: "Engineering Physics", province: "Ontario" },
      ],
      successTips: [
        "Excel in mathematics and physics",
        "Gain hands-on experience through co-op programs",
        "Develop strong problem-solving skills",
        "Stay current with technology trends",
        "Work on personal projects and build a portfolio",
        "Consider specializing in emerging fields (AI, renewable energy, etc.)",
        "Develop both technical and communication skills",
        "Join engineering societies and competitions",
      ],
      careerOptions: [
        { role: "Software Engineer", salary: "$65,000 - $150,000+", outlook: "Excellent" },
        { role: "Civil Engineer", salary: "$55,000 - $100,000", outlook: "Growing" },
        { role: "Mechanical Engineer", salary: "$60,000 - $110,000", outlook: "Stable" },
        { role: "Electrical Engineer", salary: "$65,000 - $120,000", outlook: "Growing" },
        { role: "Chemical Engineer", salary: "$70,000 - $130,000", outlook: "Stable" },
        { role: "Engineering Manager", salary: "$90,000 - $180,000+", outlook: "Growing" },
      ],
    },
  }

  const filteredFields = Object.entries(careerFields).filter(([key, field]) => {
    if (!searchTerm) return true
    return (
      field.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.careerOptions.some((option) => option.role.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

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
              <Link href="/careers" className="text-blue-600 font-medium">
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
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-12 w-12 text-indigo-600 mr-3" />
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 text-lg px-4 py-2">
                Career Exploration
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Your <span className="text-indigo-600">Career Path</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover detailed information about major career fields in Canada. Learn what professionals do,
              educational requirements, top schools, and success strategies for your chosen path.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search career fields, roles, or specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Fields */}
      {filteredFields.map(([key, field]) => (
        <section key={key} className={`py-12 ${key === "business" || key === "medicine" ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between cursor-pointer mb-8" onClick={() => toggleSection(key)}>
              <div className="flex items-center space-x-3">
                <div className={`p-3 bg-${field.color}-100 rounded-lg`}>{field.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{field.title}</h2>
                  <p className="text-gray-600">{field.description}</p>
                </div>
              </div>
              {expandedSections[key] ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>

            {expandedSections[key] && (
              <div className="space-y-8">
                {/* What They Do */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-600" />
                      What They Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{field.whatTheyDo}</p>
                  </CardContent>
                </Card>

                {/* Educational Pathways */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-600" />
                      Educational Pathways
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {field.pathways.map((pathway, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{pathway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Top Schools */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Canadian Schools</CardTitle>
                    <CardDescription>Leading institutions known for excellence in this field</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {field.topSchools.map((school, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-gray-900 mb-1">{school.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{school.specialty}</p>
                          <Badge variant="outline" className="text-xs">
                            {school.province}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Success Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                      Success Tips
                    </CardTitle>
                    <CardDescription>Key strategies to excel in this field</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {field.successTips.map((tip, index) => (
                        <div key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Career Options */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      Career Options & Outlook
                    </CardTitle>
                    <CardDescription>Common roles, salary ranges, and job market outlook</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {field.careerOptions.map((option, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{option.role}</h4>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Salary:</span> {option.salary}
                          </p>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Outlook:</span>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                option.outlook.includes("High") ||
                                option.outlook.includes("Excellent") ||
                                option.outlook.includes("Growing")
                                  ? "border-green-500 text-green-700"
                                  : option.outlook.includes("Stable")
                                    ? "border-blue-500 text-blue-700"
                                    : "border-yellow-500 text-yellow-700"
                              }`}
                            >
                              {option.outlook}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Take our personalized assessment to discover which career path aligns with your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/get-started">Take Career Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/pathways">Explore All Pathways</Link>
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
                Comprehensive career guidance for Canadian students exploring their future paths.
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
              <h4 className="font-semibold mb-4">Career Fields</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => toggleSection("business")} className="hover:text-white transition-colors">
                    Business & Commerce
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("law")} className="hover:text-white transition-colors">
                    Law & Legal Studies
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("medicine")} className="hover:text-white transition-colors">
                    Medicine & Healthcare
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("engineering")} className="hover:text-white transition-colors">
                    Engineering & Technology
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
