"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  MessageSquare,
  CheckCircle,
  Send,
  Heart,
  Star,
  BookOpen,
  Lightbulb,
  Share2,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function ContributePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    title: "",
    content: "",
    school: "",
    program: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: "experience", label: "Personal Experience" },
    { value: "tips", label: "Study Tips & Advice" },
    { value: "program-info", label: "Program Information" },
    { value: "school-review", label: "School Review" },
    { value: "career-insight", label: "Career Insights" },
    { value: "financial-advice", label: "Financial Advice" },
    { value: "other", label: "Other" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        category: "",
        title: "",
        content: "",
        school: "",
        program: "",
      })
    }, 3000)
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
              <Link href="/contribute" className="text-blue-600 font-medium">
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
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-12 w-12 text-green-600 mr-3" />
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                Building Our Community
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Share Your <span className="text-green-600">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Help fellow Canadian students by sharing your experiences, insights, and advice. Your story could be the
              guidance someone needs to make their next big decision.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                <span>Your Voice Matters</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                <span>Building Together</span>
              </div>
              <div className="flex items-center">
                <Share2 className="h-5 w-5 mr-2 text-purple-600" />
                <span>Growing Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contribute Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Contribution Matters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PathFinder is just getting started, and we're building something special together. Every story, tip, and
              piece of advice helps create a valuable resource for future students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-green-100 hover:border-green-300 transition-colors">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Share Your Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your experiences with applications, programs, and career decisions can provide valuable guidance to
                  students facing similar choices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Build Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help us create a comprehensive database of program information, school reviews, and career insights
                  from real Canadian students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Support Others</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your story could be exactly what another student needs to hear. Help build a supportive community
                  where students help students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribution Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Story</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to contribute your experiences and insights to the PathFinder community.
              </p>
            </div>

            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-green-600" />
                  Contribution Form
                </CardTitle>
                <CardDescription>
                  All contributions are reviewed before publication to ensure quality and helpfulness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      Your contribution has been submitted and will be reviewed by our team. We appreciate you helping
                      to build the PathFinder community!
                    </p>
                    <Badge className="bg-green-100 text-green-800">We'll notify you when it's published</Badge>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Category and Title */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Contribution Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="">Select a category</option>
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                          Title *
                        </label>
                        <Input
                          id="title"
                          name="title"
                          type="text"
                          required
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Give your contribution a descriptive title"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* School and Program (Optional) */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                          School/Institution (Optional)
                        </label>
                        <Input
                          id="school"
                          name="school"
                          type="text"
                          value={formData.school}
                          onChange={handleInputChange}
                          placeholder="e.g., University of Toronto"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                          Program/Field (Optional)
                        </label>
                        <Input
                          id="program"
                          name="program"
                          type="text"
                          value={formData.program}
                          onChange={handleInputChange}
                          placeholder="e.g., Computer Science, Business"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Contribution *
                      </label>
                      <Textarea
                        id="content"
                        name="content"
                        required
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Share your experiences, tips, insights, or advice. Be specific and helpful - what do you wish you had known? What worked well for you? What challenges did you face?"
                        rows={8}
                        className="w-full"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Minimum 100 characters. Be detailed and specific to help other students.
                      </p>
                    </div>

                    {/* Guidelines */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-2">Contribution Guidelines:</p>
                          <ul className="text-blue-700 space-y-1 text-sm">
                            <li>• Be honest and constructive in your feedback</li>
                            <li>• Focus on helpful, actionable advice</li>
                            <li>• Respect privacy - don't share personal information of others</li>
                            <li>• Keep content appropriate and professional</li>
                            <li>• All contributions are reviewed before publication</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Contribution
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Building Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Building PathFinder Together</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PathFinder is still under construction, and we're excited to build this resource with the Canadian student
              community. Every contribution helps us create something valuable for future students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  All contributions are carefully reviewed to ensure they're helpful and accurate
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Student-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Built by students, for students - real experiences and practical advice
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Growing through the collective wisdom and experiences of Canadian students
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Always Improving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Continuously updated with fresh insights and new perspectives</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Help Other Students?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Your experiences and insights could be exactly what another student needs to make their next big decision.
            Join our growing community of contributors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="#contribution-form">Share Your Story</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/contact">Have Questions?</Link>
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
                Building Canada's most comprehensive student-driven resource for post-secondary planning.
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
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/contribute" className="hover:text-white transition-colors">
                    Share Your Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
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
