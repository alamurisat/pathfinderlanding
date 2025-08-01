"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  BookOpen,
  Wrench,
  Plane,
  Target,
  Star,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: "",
    grade: "",
    province: "",

    // Step 2: Interests & Goals
    interests: [] as string[],
    careerGoals: "",
    workStyle: "",

    // Step 3: Preferences & Constraints
    budget: "",
    location: "",
    timeframe: "",
    priorities: [] as string[],

    // Step 4: Current Situation
    grades: "",
    subjects: [] as string[],
    experience: [] as string[],
    support: "",
  })

  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState<any[]>([])

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  const interestOptions = [
    "Science & Technology",
    "Business & Finance",
    "Arts & Creative",
    "Healthcare & Medicine",
    "Education & Social Work",
    "Engineering",
    "Law & Government",
    "Trades & Technical",
    "Sports & Recreation",
    "Environment & Agriculture",
  ]

  const priorityOptions = [
    "High earning potential",
    "Job security",
    "Work-life balance",
    "Helping others",
    "Creative expression",
    "Leadership opportunities",
    "Continuous learning",
    "Travel opportunities",
    "Flexible schedule",
    "Making a difference",
  ]

  const subjectOptions = [
    "Mathematics",
    "English",
    "Sciences (Biology, Chemistry, Physics)",
    "Social Studies",
    "French",
    "Arts",
    "Business Studies",
    "Computer Science",
    "Other Languages",
  ]

  const experienceOptions = [
    "Part-time job",
    "Volunteer work",
    "Leadership roles",
    "Sports teams",
    "Clubs/organizations",
    "Internships",
    "Personal projects",
    "Travel experiences",
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleArrayToggle = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateRecommendations = () => {
    // Simple recommendation logic based on form data
    const recs = []

    // University recommendation
    if (formData.grades === "80-89%" || formData.grades === "90%+") {
      recs.push({
        type: "University",
        icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
        match:
          formData.interests.includes("Science & Technology") || formData.interests.includes("Business & Finance")
            ? 95
            : 85,
        title: "University Degree Programs",
        description: "4-year bachelor's degree programs with strong academic focus",
        reasons: [
          "Strong academic performance aligns with university requirements",
          formData.interests.includes("Science & Technology")
            ? "STEM interests match university research opportunities"
            : "Academic interests suit university environment",
          "Good preparation for professional careers",
        ],
        nextSteps: [
          "Research specific programs at universities in " + formData.province,
          "Prepare for standardized tests if required",
          "Apply for scholarships and financial aid",
          "Visit campuses and attend information sessions",
        ],
        resources: [
          { name: "OUAC Application Centre", url: "https://www.ouac.on.ca/" },
          { name: "University Programs Database", url: "/pathways" },
          { name: "Scholarship Opportunities", url: "/resources" },
        ],
      })
    }

    // College recommendation
    if (formData.workStyle === "hands-on" || formData.priorities.includes("Job security")) {
      recs.push({
        type: "College",
        icon: <BookOpen className="h-8 w-8 text-green-600" />,
        match: 90,
        title: "College Diploma Programs",
        description: "Practical, career-focused programs with hands-on learning",
        reasons: [
          "Hands-on learning style matches college approach",
          "Strong job placement rates in many programs",
          "More affordable than university options",
        ],
        nextSteps: [
          "Explore college programs in your area of interest",
          "Look into co-op and placement opportunities",
          "Apply early for competitive programs",
          "Consider pathway programs to university if desired",
        ],
        resources: [
          { name: "Ontario Colleges", url: "https://www.ontariocolleges.ca/" },
          { name: "College Programs Guide", url: "/pathways" },
          { name: "Financial Aid Information", url: "/resources" },
        ],
      })
    }

    // Trades recommendation
    if (formData.interests.includes("Trades & Technical") || formData.priorities.includes("High earning potential")) {
      recs.push({
        type: "Skilled Trades",
        icon: <Wrench className="h-8 w-8 text-orange-600" />,
        match: 88,
        title: "Skilled Trades & Apprenticeships",
        description: "Learn while you earn in high-demand technical fields",
        reasons: [
          "Excellent earning potential in many trades",
          "High job security and demand",
          "Practical, hands-on work environment",
        ],
        nextSteps: [
          "Research different trade options and requirements",
          "Find employers who hire apprentices",
          "Look into pre-apprenticeship programs",
          "Connect with trade professionals for insights",
        ],
        resources: [
          { name: "Ontario College of Trades", url: "https://trades.ontariocolleges.ca/" },
          { name: "Apprenticeship Information", url: "/pathways" },
          { name: "Trade Career Exploration", url: "/careers" },
        ],
      })
    }

    // Gap Year recommendation
    if (formData.timeframe === "flexible" || formData.experience.includes("Travel experiences")) {
      recs.push({
        type: "Gap Year",
        icon: <Plane className="h-8 w-8 text-purple-600" />,
        match: 75,
        title: "Gap Year Programs",
        description: "Take time to explore, gain experience, and clarify your goals",
        reasons: [
          "Flexible timeline allows for exploration",
          "Travel experience shows openness to new experiences",
          "Can help clarify career and education goals",
        ],
        nextSteps: [
          "Research structured gap year programs",
          "Look into volunteer and work opportunities",
          "Set clear goals for your gap year",
          "Keep post-secondary applications current",
        ],
        resources: [
          { name: "Gap Year Programs", url: "/pathways" },
          { name: "Volunteer Opportunities", url: "/resources" },
          { name: "Career Exploration Tools", url: "/careers" },
        ],
      })
    }

    setRecommendations(recs.sort((a, b) => b.match - a.match))
    setShowResults(true)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your name? *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What grade are you currently in? *</label>
              <select
                value={formData.grade}
                onChange={(e) => handleInputChange("grade", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your grade</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="Graduated">Recently Graduated</option>
                <option value="Adult Learner">Adult Learner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Which province are you from? *</label>
              <select
                value={formData.province}
                onChange={(e) => handleInputChange("province", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your province</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What are your main interests? (Select all that apply) *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleArrayToggle("interests", interest)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any specific career goals in mind?
              </label>
              <textarea
                value={formData.careerGoals}
                onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Describe any career ideas you have, or write 'not sure yet' if you're still exploring"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How do you prefer to learn? *</label>
              <div className="space-y-2">
                {["hands-on", "theoretical", "mixed", "not-sure"].map((style) => (
                  <label key={style} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="workStyle"
                      value={style}
                      checked={formData.workStyle === style}
                      onChange={(e) => handleInputChange("workStyle", e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      {style === "hands-on" && "Hands-on, practical learning"}
                      {style === "theoretical" && "Theoretical, academic learning"}
                      {style === "mixed" && "A mix of both"}
                      {style === "not-sure" && "I'm not sure yet"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your budget for post-secondary education? *
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your budget range</option>
                <option value="under-10k">Under $10,000 per year</option>
                <option value="10k-20k">$10,000 - $20,000 per year</option>
                <option value="20k-30k">$20,000 - $30,000 per year</option>
                <option value="over-30k">Over $30,000 per year</option>
                <option value="not-sure">I'm not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Where would you prefer to study? *</label>
              <select
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your preference</option>
                <option value="home">Stay close to home</option>
                <option value="province">Anywhere in my province</option>
                <option value="canada">Anywhere in Canada</option>
                <option value="flexible">I'm flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When do you want to start your post-secondary journey? *
              </label>
              <select
                value={formData.timeframe}
                onChange={(e) => handleInputChange("timeframe", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select timeframe</option>
                <option value="immediately">Right after high school</option>
                <option value="gap-year">After a gap year</option>
                <option value="flexible">I'm flexible with timing</option>
                <option value="not-sure">I'm not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What's most important to you in your future career? (Select up to 3) *
              </label>
              <div className="grid grid-cols-1 gap-2">
                {priorityOptions.map((priority) => (
                  <label key={priority} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.priorities.includes(priority)}
                      onChange={() => handleArrayToggle("priorities", priority)}
                      disabled={formData.priorities.length >= 3 && !formData.priorities.includes(priority)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{priority}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Selected: {formData.priorities.length}/3</p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your current academic performance? *
              </label>
              <select
                value={formData.grades}
                onChange={(e) => handleInputChange("grades", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your grade range</option>
                <option value="90%+">90% and above</option>
                <option value="80-89%">80-89%</option>
                <option value="70-79%">70-79%</option>
                <option value="60-69%">60-69%</option>
                <option value="below-60%">Below 60%</option>
                <option value="varies">It varies by subject</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which subjects do you enjoy or excel in? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 gap-2">
                {subjectOptions.map((subject) => (
                  <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(subject)}
                      onChange={() => handleArrayToggle("subjects", subject)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What experiences have you had outside of school? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 gap-2">
                {experienceOptions.map((experience) => (
                  <label key={experience} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.experience.includes(experience)}
                      onChange={() => handleArrayToggle("experience", experience)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{experience}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How much support do you have for your post-secondary plans? *
              </label>
              <select
                value={formData.support}
                onChange={(e) => handleInputChange("support", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select support level</option>
                <option value="strong">Strong family/financial support</option>
                <option value="moderate">Some support available</option>
                <option value="limited">Limited support</option>
                <option value="independent">I'm on my own</option>
              </select>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (showResults) {
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

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600 mr-3" />
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                  Your Personalized Results
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi {formData.name}! Here are your <span className="text-green-600">recommendations</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Based on your responses, we've identified the best post-secondary pathways for you. Each recommendation
                includes specific next steps and resources to help you move forward.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
              {recommendations.map((rec, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {rec.icon}
                        <div>
                          <CardTitle className="text-2xl">{rec.title}</CardTitle>
                          <CardDescription className="text-lg">{rec.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-5 w-5 text-yellow-500" />
                          <span className="text-2xl font-bold text-green-600">{rec.match}%</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Match</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Why This Matches */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-blue-600" />
                        Why This Matches You
                      </h4>
                      <ul className="space-y-2">
                        {rec.reasons.map((reason: string, reasonIndex: number) => (
                          <li key={reasonIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Next Steps */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                        Your Next Steps
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {rec.nextSteps.map((step: string, stepIndex: number) => (
                          <div key={stepIndex} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-purple-600" />
                        Helpful Resources
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {rec.resources.map((resource: any, resourceIndex: number) => (
                          <Link
                            key={resourceIndex}
                            href={resource.url}
                            target={resource.url.startsWith("http") ? "_blank" : "_self"}
                            rel={resource.url.startsWith("http") ? "noopener noreferrer" : ""}
                            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex-1">
                              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                {resource.name}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                  <Link href="/pathways">Explore All Pathways</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
                  <Link href="/resources">Find Resources</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-transparent"
                  onClick={() => {
                    setShowResults(false)
                    setCurrentStep(1)
                    setFormData({
                      name: "",
                      grade: "",
                      province: "",
                      interests: [],
                      careerGoals: "",
                      workStyle: "",
                      budget: "",
                      location: "",
                      timeframe: "",
                      priorities: [],
                      grades: "",
                      subjects: [],
                      experience: [],
                      support: "",
                    })
                  }}
                >
                  Retake Assessment
                </Button>
              </div>
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
                  Personalized guidance for your post-secondary journey in Canada.
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
                <h4 className="font-semibold mb-4">Assessment</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/get-started" className="hover:text-white transition-colors">
                      Take Assessment
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      Career Exploration
                    </Link>
                  </li>
                  <li>
                    <Link href="/contribute" className="hover:text-white transition-colors">
                      Share Your Story
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

      {/* Assessment Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600 mr-3" />
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
                  Personalized Assessment
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your Perfect <span className="text-blue-600">Path</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Answer a few questions to get personalized recommendations for your post-secondary journey in Canada.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Assessment Form */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentStep === 1 && "Let's start with the basics"}
                  {currentStep === 2 && "Tell us about your interests"}
                  {currentStep === 3 && "What are your preferences?"}
                  {currentStep === 4 && "About your current situation"}
                </CardTitle>
                <CardDescription className="text-lg">
                  {currentStep === 1 && "We'll use this information to personalize your recommendations"}
                  {currentStep === 2 && "Understanding your interests helps us suggest the right paths"}
                  {currentStep === 3 && "These factors will help us narrow down your options"}
                  {currentStep === 4 && "This helps us understand where you're starting from"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 flex items-center"
                      disabled={
                        (currentStep === 1 && (!formData.name || !formData.grade || !formData.province)) ||
                        (currentStep === 2 && (formData.interests.length === 0 || !formData.workStyle)) ||
                        (currentStep === 3 &&
                          (!formData.budget ||
                            !formData.location ||
                            !formData.timeframe ||
                            formData.priorities.length === 0)) ||
                        (currentStep === 4 && (!formData.grades || !formData.support))
                      }
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={generateRecommendations}
                      className="bg-green-600 hover:bg-green-700 flex items-center"
                      disabled={!formData.grades || !formData.support}
                    >
                      Get My Recommendations
                      <CheckCircle className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Help Text */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                This assessment takes about 5-10 minutes to complete. Your responses help us provide personalized
                recommendations.
              </p>
            </div>
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
              <p className="text-gray-400 text-sm">Personalized guidance for your post-secondary journey in Canada.</p>
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
              <h4 className="font-semibold mb-4">Assessment</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/get-started" className="hover:text-white transition-colors">
                    Take Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Career Exploration
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Share Your Story
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
