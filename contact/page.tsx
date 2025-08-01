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
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Users,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { sendContactEmail } from "./actions/send-email"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "content", label: "Content Feedback" },
    { value: "partnership", label: "Partnership/Collaboration" },
    { value: "media", label: "Media Inquiry" },
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
    setSubmitError(null)

    try {
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("category", formData.category)
      formDataObj.append("subject", formData.subject)
      formDataObj.append("message", formData.message)

      const result = await sendContactEmail(formDataObj)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          category: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitError(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setSubmitError(null)
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-blue-600 mr-3" />
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">Get In Touch</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">PathFinder</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions about your post-secondary journey? Need help navigating your options? We're here to help
              Canadian students find their path to success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Send us a message anytime</p>
                <a href="mailto:alamurisatvika@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  alamurisatvika@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">We typically respond within</p>
                <p className="text-green-600 font-medium">24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="text-purple-600 font-medium">9:00 AM - 5:00 PM EST</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Contact Form
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us assist you better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting PathFinder. We've received your message and will get back to you within
                      24 hours.
                    </p>
                    <div className="space-y-2 mb-6">
                      <Badge className="bg-green-100 text-green-800">Email sent to our team</Badge>
                      <br />
                      <Badge className="bg-blue-100 text-blue-800">Confirmation sent to your email</Badge>
                    </div>
                    <Button onClick={resetForm} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div className="text-sm text-red-800">
                            <p className="font-medium mb-1">Error sending message:</p>
                            <p>{submitError}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
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

                    {/* Category and Subject */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief description of your inquiry"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your question or concern. The more information you provide, the better we can help you."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">Privacy Notice:</p>
                          <p className="text-blue-700">
                            Your personal information will only be used to respond to your inquiry. We do not share your
                            information with third parties and will delete your data after resolving your request.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
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

      {/* Quick Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Quick Help?</h2>
            <p className="text-lg text-gray-600">Check out these resources for immediate assistance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Find answers to commonly asked questions</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Access our comprehensive resource database</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Browse Resources</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Explore all post-secondary options</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/pathways">View Pathways</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Share your experiences and help others</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contribute">Contribute</Link>
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
                Your trusted guide to Canadian post-secondary education and career planning.
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
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  alamurisatvika@gmail.com
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24 hour response time
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
