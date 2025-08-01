"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  BookOpen,
  Wrench,
  Plane,
  Briefcase,
  Search,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function PathwaysPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    university: true,
    college: false,
    trades: false,
    gapYear: false,
    directWork: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const universities = {
    "British Columbia": [
      {
        name: "University of British Columbia",
        location: "Vancouver/Kelowna",
        type: "Research University",
        programs: "300+ programs",
        website: "https://www.ubc.ca/",
      },
      {
        name: "Simon Fraser University",
        location: "Burnaby",
        type: "Research University",
        programs: "200+ programs",
        website: "https://www.sfu.ca/",
      },
      {
        name: "University of Victoria",
        location: "Victoria",
        type: "Research University",
        programs: "160+ programs",
        website: "https://www.uvic.ca/",
      },
      {
        name: "Thompson Rivers University",
        location: "Kamloops",
        type: "Comprehensive University",
        programs: "140+ programs",
        website: "https://www.tru.ca/",
      },
      {
        name: "University of Northern British Columbia",
        location: "Prince George",
        type: "Research University",
        programs: "65+ programs",
        website: "https://www.unbc.ca/",
      },
      {
        name: "Capilano University",
        location: "North Vancouver",
        type: "Teaching University",
        programs: "90+ programs",
        website: "https://www.capilanou.ca/",
      },
      {
        name: "Emily Carr University",
        location: "Vancouver",
        type: "Art & Design University",
        programs: "20+ programs",
        website: "https://www.ecuad.ca/",
      },
      {
        name: "Kwantlen Polytechnic University",
        location: "Surrey",
        type: "Polytechnic University",
        programs: "120+ programs",
        website: "https://www.kpu.ca/",
      },
    ],
    Alberta: [
      {
        name: "University of Alberta",
        location: "Edmonton",
        type: "Research University",
        programs: "400+ programs",
        website: "https://www.ualberta.ca/",
      },
      {
        name: "University of Calgary",
        location: "Calgary",
        type: "Research University",
        programs: "250+ programs",
        website: "https://www.ucalgary.ca/",
      },
      {
        name: "Athabasca University",
        location: "Athabasca",
        type: "Distance Learning",
        programs: "90+ programs",
        website: "https://www.athabascau.ca/",
      },
      {
        name: "MacEwan University",
        location: "Edmonton",
        type: "Undergraduate University",
        programs: "65+ programs",
        website: "https://www.macewan.ca/",
      },
      {
        name: "Mount Royal University",
        location: "Calgary",
        type: "Undergraduate University",
        programs: "40+ programs",
        website: "https://www.mtroyal.ca/",
      },
      {
        name: "University of Lethbridge",
        location: "Lethbridge",
        type: "Research University",
        programs: "150+ programs",
        website: "https://www.ulethbridge.ca/",
      },
    ],
    Saskatchewan: [
      {
        name: "University of Saskatchewan",
        location: "Saskatoon",
        type: "Research University",
        programs: "200+ programs",
        website: "https://www.usask.ca/",
      },
      {
        name: "University of Regina",
        location: "Regina",
        type: "Research University",
        programs: "120+ programs",
        website: "https://www.uregina.ca/",
      },
    ],
    Manitoba: [
      {
        name: "University of Manitoba",
        location: "Winnipeg",
        type: "Research University",
        programs: "300+ programs",
        website: "https://umanitoba.ca/",
      },
      {
        name: "University of Winnipeg",
        location: "Winnipeg",
        type: "Undergraduate University",
        programs: "50+ programs",
        website: "https://www.uwinnipeg.ca/",
      },
      {
        name: "Brandon University",
        location: "Brandon",
        type: "Undergraduate University",
        programs: "40+ programs",
        website: "https://www.brandonu.ca/",
      },
    ],
    Ontario: [
      {
        name: "University of Toronto",
        location: "Toronto",
        type: "Research University",
        programs: "700+ programs",
        website: "https://www.utoronto.ca/",
      },
      {
        name: "University of Waterloo",
        location: "Waterloo",
        type: "Research University",
        programs: "200+ programs",
        website: "https://uwaterloo.ca/",
      },
      {
        name: "McMaster University",
        location: "Hamilton",
        type: "Research University",
        programs: "160+ programs",
        website: "https://www.mcmaster.ca/",
      },
      {
        name: "Queen's University",
        location: "Kingston",
        type: "Research University",
        programs: "150+ programs",
        website: "https://www.queensu.ca/",
      },
      {
        name: "Western University",
        location: "London",
        type: "Research University",
        programs: "400+ programs",
        website: "https://www.uwo.ca/",
      },
      {
        name: "University of Ottawa",
        location: "Ottawa",
        type: "Research University",
        programs: "450+ programs",
        website: "https://www.uottawa.ca/",
      },
      {
        name: "York University",
        location: "Toronto",
        type: "Research University",
        programs: "300+ programs",
        website: "https://www.yorku.ca/",
      },
      {
        name: "Toronto Metropolitan University",
        location: "Toronto",
        type: "Comprehensive University",
        programs: "100+ programs",
        website: "https://www.torontomu.ca/",
      },
      {
        name: "Carleton University",
        location: "Ottawa",
        type: "Research University",
        programs: "100+ programs",
        website: "https://carleton.ca/",
      },
      {
        name: "University of Guelph",
        location: "Guelph",
        type: "Research University",
        programs: "90+ programs",
        website: "https://www.uoguelph.ca/",
      },
      {
        name: "Wilfrid Laurier University",
        location: "Waterloo",
        type: "Comprehensive University",
        programs: "75+ programs",
        website: "https://www.wlu.ca/",
      },
      {
        name: "Brock University",
        location: "St. Catharines",
        type: "Comprehensive University",
        programs: "60+ programs",
        website: "https://brocku.ca/",
      },
      {
        name: "Trent University",
        location: "Peterborough",
        type: "Undergraduate University",
        programs: "40+ programs",
        website: "https://www.trentu.ca/",
      },
      {
        name: "Lakehead University",
        location: "Thunder Bay",
        type: "Comprehensive University",
        programs: "85+ programs",
        website: "https://www.lakeheadu.ca/",
      },
      {
        name: "University of Windsor",
        location: "Windsor",
        type: "Comprehensive University",
        programs: "120+ programs",
        website: "https://www.uwindsor.ca/",
      },
      {
        name: "OCAD University",
        location: "Toronto",
        type: "Art & Design University",
        programs: "25+ programs",
        website: "https://www.ocadu.ca/",
      },
    ],
    Quebec: [
      {
        name: "McGill University",
        location: "Montreal",
        type: "Research University",
        programs: "300+ programs",
        website: "https://www.mcgill.ca/",
      },
      {
        name: "Université de Montréal",
        location: "Montreal",
        type: "Research University",
        programs: "650+ programs",
        website: "https://www.umontreal.ca/",
      },
      {
        name: "Université Laval",
        location: "Quebec City",
        type: "Research University",
        programs: "500+ programs",
        website: "https://www.ulaval.ca/",
      },
      {
        name: "Concordia University",
        location: "Montreal",
        type: "Comprehensive University",
        programs: "300+ programs",
        website: "https://www.concordia.ca/",
      },
      {
        name: "Université du Québec à Montréal",
        location: "Montreal",
        type: "Research University",
        programs: "300+ programs",
        website: "https://uqam.ca/",
      },
      {
        name: "Université de Sherbrooke",
        location: "Sherbrooke",
        type: "Research University",
        programs: "200+ programs",
        website: "https://www.usherbrooke.ca/",
      },
    ],
    "New Brunswick": [
      {
        name: "University of New Brunswick",
        location: "Fredericton/Saint John",
        type: "Research University",
        programs: "75+ programs",
        website: "https://www.unb.ca/",
      },
      {
        name: "Mount Allison University",
        location: "Sackville",
        type: "Undergraduate University",
        programs: "50+ programs",
        website: "https://www.mta.ca/",
      },
      {
        name: "St. Thomas University",
        location: "Fredericton",
        type: "Undergraduate University",
        programs: "25+ programs",
        website: "https://www.stu.ca/",
      },
    ],
    "Nova Scotia": [
      {
        name: "Dalhousie University",
        location: "Halifax",
        type: "Research University",
        programs: "200+ programs",
        website: "https://www.dal.ca/",
      },
      {
        name: "Saint Mary's University",
        location: "Halifax",
        type: "Comprehensive University",
        programs: "60+ programs",
        website: "https://www.smu.ca/",
      },
      {
        name: "Acadia University",
        location: "Wolfville",
        type: "Undergraduate University",
        programs: "60+ programs",
        website: "https://www.acadiau.ca/",
      },
      {
        name: "Cape Breton University",
        location: "Sydney",
        type: "Undergraduate University",
        programs: "65+ programs",
        website: "https://www.cbu.ca/",
      },
      {
        name: "St. Francis Xavier University",
        location: "Antigonish",
        type: "Undergraduate University",
        programs: "50+ programs",
        website: "https://www.stfx.ca/",
      },
      {
        name: "NSCAD University",
        location: "Halifax",
        type: "Art & Design University",
        programs: "15+ programs",
        website: "https://nscad.ca/",
      },
    ],
    "Prince Edward Island": [
      {
        name: "University of Prince Edward Island",
        location: "Charlottetown",
        type: "Comprehensive University",
        programs: "50+ programs",
        website: "https://www.upei.ca/",
      },
    ],
    "Newfoundland and Labrador": [
      {
        name: "Memorial University",
        location: "St. John's",
        type: "Research University",
        programs: "100+ programs",
        website: "https://www.mun.ca/",
      },
    ],
  }

  const colleges = {
    "British Columbia": [
      {
        name: "British Columbia Institute of Technology",
        location: "Burnaby",
        type: "Polytechnic",
        programs: "300+ programs",
        website: "https://www.bcit.ca/",
      },
      {
        name: "Douglas College",
        location: "New Westminster",
        type: "Community College",
        programs: "120+ programs",
        website: "https://www.douglascollege.ca/",
      },
      {
        name: "Langara College",
        location: "Vancouver",
        type: "Community College",
        programs: "80+ programs",
        website: "https://langara.ca/",
      },
      {
        name: "Vancouver Community College",
        location: "Vancouver",
        type: "Community College",
        programs: "140+ programs",
        website: "https://www.vcc.ca/",
      },
      {
        name: "Camosun College",
        location: "Victoria",
        type: "Community College",
        programs: "160+ programs",
        website: "https://camosun.ca/",
      },
      {
        name: "College of the Rockies",
        location: "Cranbrook",
        type: "Community College",
        programs: "60+ programs",
        website: "https://cotr.ca/",
      },
      {
        name: "Northern Lights College",
        location: "Dawson Creek",
        type: "Community College",
        programs: "50+ programs",
        website: "https://www.nlc.ca/",
      },
    ],
    Alberta: [
      {
        name: "Southern Alberta Institute of Technology",
        location: "Calgary",
        type: "Polytechnic",
        programs: "250+ programs",
        website: "https://www.sait.ca/",
      },
      {
        name: "Northern Alberta Institute of Technology",
        location: "Edmonton",
        type: "Polytechnic",
        programs: "200+ programs",
        website: "https://www.nait.ca/",
      },
      {
        name: "Bow Valley College",
        location: "Calgary",
        type: "Community College",
        programs: "90+ programs",
        website: "https://bowvalleycollege.ca/",
      },
      {
        name: "NorQuest College",
        location: "Edmonton",
        type: "Community College",
        programs: "30+ programs",
        website: "https://www.norquest.ca/",
      },
      {
        name: "Red Deer College",
        location: "Red Deer",
        type: "Community College",
        programs: "75+ programs",
        website: "https://rdc.ab.ca/",
      },
      {
        name: "Lethbridge College",
        location: "Lethbridge",
        type: "Community College",
        programs: "50+ programs",
        website: "https://lethbridgecollege.ca/",
      },
    ],
    Saskatchewan: [
      {
        name: "Saskatchewan Polytechnic",
        location: "Multiple Locations",
        type: "Polytechnic",
        programs: "150+ programs",
        website: "https://saskpolytech.ca/",
      },
    ],
    Manitoba: [
      {
        name: "Red River College Polytechnic",
        location: "Winnipeg",
        type: "Polytechnic",
        programs: "200+ programs",
        website: "https://www.rrc.ca/",
      },
      {
        name: "Assiniboine Community College",
        location: "Brandon",
        type: "Community College",
        programs: "40+ programs",
        website: "https://assiniboine.net/",
      },
    ],
    Ontario: [
      {
        name: "Seneca College",
        location: "Toronto",
        type: "Community College",
        programs: "300+ programs",
        website: "https://www.senecacollege.ca/",
      },
      {
        name: "Centennial College",
        location: "Toronto",
        type: "Community College",
        programs: "260+ programs",
        website: "https://www.centennialcollege.ca/",
      },
      {
        name: "George Brown College",
        location: "Toronto",
        type: "Community College",
        programs: "200+ programs",
        website: "https://www.georgebrown.ca/",
      },
      {
        name: "Humber College",
        location: "Toronto",
        type: "Community College",
        programs: "200+ programs",
        website: "https://humber.ca/",
      },
      {
        name: "Sheridan College",
        location: "Oakville",
        type: "Community College",
        programs: "130+ programs",
        website: "https://www.sheridancollege.ca/",
      },
      {
        name: "Algonquin College",
        location: "Ottawa",
        type: "Community College",
        programs: "300+ programs",
        website: "https://www.algonquincollege.com/",
      },
      {
        name: "Conestoga College",
        location: "Kitchener",
        type: "Community College",
        programs: "200+ programs",
        website: "https://www.conestogac.on.ca/",
      },
      {
        name: "Fanshawe College",
        location: "London",
        type: "Community College",
        programs: "200+ programs",
        website: "https://www.fanshawec.ca/",
      },
      {
        name: "Mohawk College",
        location: "Hamilton",
        type: "Community College",
        programs: "135+ programs",
        website: "https://www.mohawkcollege.ca/",
      },
      {
        name: "St. Lawrence College",
        location: "Kingston",
        type: "Community College",
        programs: "100+ programs",
        website: "https://www.stlawrencecollege.ca/",
      },
      {
        name: "Niagara College",
        location: "Welland",
        type: "Community College",
        programs: "100+ programs",
        website: "https://www.niagaracollege.ca/",
      },
      {
        name: "Durham College",
        location: "Oshawa",
        type: "Community College",
        programs: "140+ programs",
        website: "https://durhamcollege.ca/",
      },
    ],
    Quebec: [
      {
        name: "Dawson College",
        location: "Montreal",
        type: "CEGEP",
        programs: "60+ programs",
        website: "https://www.dawsoncollege.qc.ca/",
      },
      {
        name: "Vanier College",
        location: "Montreal",
        type: "CEGEP",
        programs: "50+ programs",
        website: "https://www.vaniercollege.qc.ca/",
      },
      {
        name: "John Abbott College",
        location: "Montreal",
        type: "CEGEP",
        programs: "40+ programs",
        website: "https://www.johnabbott.qc.ca/",
      },
      {
        name: "Champlain College",
        location: "Multiple Locations",
        type: "CEGEP",
        programs: "35+ programs",
        website: "https://www.champlaincollege.qc.ca/",
      },
    ],
    "New Brunswick": [
      {
        name: "New Brunswick Community College",
        location: "Multiple Locations",
        type: "Community College",
        programs: "90+ programs",
        website: "https://nbcc.ca/",
      },
    ],
    "Nova Scotia": [
      {
        name: "Nova Scotia Community College",
        location: "Multiple Locations",
        type: "Community College",
        programs: "130+ programs",
        website: "https://www.nscc.ca/",
      },
    ],
    "Prince Edward Island": [
      {
        name: "Holland College",
        location: "Charlottetown",
        type: "Community College",
        programs: "70+ programs",
        website: "https://www.hollandcollege.com/",
      },
    ],
    "Newfoundland and Labrador": [
      {
        name: "College of the North Atlantic",
        location: "Multiple Locations",
        type: "Community College",
        programs: "100+ programs",
        website: "https://www.cna.nl.ca/",
      },
    ],
  }

  const skilledTradesResources = [
    {
      category: "Provincial Trade Organizations",
      resources: [
        {
          name: "Ontario College of Trades",
          location: "Ontario",
          description: "Official trade certification and apprenticeship information for Ontario",
          website: "https://trades.ontariocolleges.ca/",
          type: "Government Organization",
        },
        {
          name: "Industry Training Authority (BC)",
          location: "British Columbia",
          description: "BC's industry training and apprenticeship programs",
          website: "https://www.itabc.ca/",
          type: "Government Organization",
        },
        {
          name: "Alberta Apprenticeship and Industry Training",
          location: "Alberta",
          description: "Apprenticeship and trade certification in Alberta",
          website: "https://tradesecrets.alberta.ca/",
          type: "Government Organization",
        },
        {
          name: "Saskatchewan Apprenticeship and Trade Certification Commission",
          location: "Saskatchewan",
          description: "Trade training and certification in Saskatchewan",
          website: "https://saskapprenticeship.ca/",
          type: "Government Organization",
        },
        {
          name: "Apprenticeship Manitoba",
          location: "Manitoba",
          description: "Apprenticeship programs and trade certification",
          website: "https://www.gov.mb.ca/wd/apprenticeship/",
          type: "Government Organization",
        },
      ],
    },
    {
      category: "Training Institutions",
      resources: [
        {
          name: "Red River College Polytechnic - Apprenticeship",
          location: "Manitoba",
          description: "Comprehensive apprenticeship and trades training programs",
          website: "https://www.rrc.ca/apprenticeship/",
          type: "Educational Institution",
        },
        {
          name: "SAIT - Trades and Technology",
          location: "Alberta",
          description: "Southern Alberta Institute of Technology trades programs",
          website: "https://www.sait.ca/programs-and-courses/trades-and-technology",
          type: "Educational Institution",
        },
        {
          name: "BCIT - Trades and Technology",
          location: "British Columbia",
          description: "British Columbia Institute of Technology trades training",
          website: "https://www.bcit.ca/study/programs/trades-technology/",
          type: "Educational Institution",
        },
        {
          name: "George Brown College - Trades",
          location: "Ontario",
          description: "Skilled trades and apprenticeship programs",
          website: "https://www.georgebrown.ca/construction-engineering-technologies/apprenticeship-skilled-trades",
          type: "Educational Institution",
        },
      ],
    },
    {
      category: "Career Information",
      resources: [
        {
          name: "Skilled Trades Ontario",
          location: "Ontario",
          description: "Promote skilled trades careers and connect with employers",
          website: "https://www.skilledtradesontario.ca/",
          type: "Career Resource",
        },
        {
          name: "Canada Job Bank - Trades",
          location: "National",
          description: "Government job search specifically for skilled trades",
          website: "https://www.jobbank.gc.ca/marketreport/requirements/22/ca",
          type: "Job Search Platform",
        },
        {
          name: "Red Seal Program",
          location: "National",
          description: "Interprovincial standards and certification for trades",
          website: "https://www.red-seal.ca/",
          type: "Certification Program",
        },
      ],
    },
  ]

  const gapYearPrograms = [
    {
      category: "Volunteer Programs",
      programs: [
        {
          name: "Katimavik",
          description: "6-month volunteer program across Canada",
          duration: "6 months",
          cost: "Free",
          website: "https://www.katimavik.org/",
        },
        {
          name: "Canada World Youth",
          description: "International volunteer exchange programs",
          duration: "5-7 months",
          cost: "Subsidized",
          website: "https://www.volunteerforever.com/program/canada-world-youth/",
        },
        {
          name: "Frontier College",
          description: "Literacy and learning volunteer programs",
          duration: "4-8 months",
          cost: "Stipend provided",
          website: "https://www.frontiercollege.ca/",
        },
        {
          name: "Me to We",
          description: "International development and volunteer trips",
          duration: "1-4 weeks",
          cost: "$2,000-$5,000",
          website: "https://www.metowe.com/",
        },
        {
          name: "Habitat for Humanity Canada",
          description: "Build homes and communities globally",
          duration: "1 week - 1 year",
          cost: "$1,500-$4,000",
          website: "https://habitat.ca/",
        },
      ],
    },
    {
      category: "Work Programs",
      programs: [
        {
          name: "International Experience Canada",
          description: "Work abroad in partner countries with working holiday visas",
          duration: "6-24 months",
          cost: "Varies by country",
          website:
            "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/international-experience-canada.html",
        },
        {
          name: "Camp America",
          description: "Work at American summer camps as counselors",
          duration: "2-4 months",
          cost: "$500-$1,500",
          website: "https://www.campamerica.co.uk/",
        },
        {
          name: "SWAP Working Holidays",
          description: "Work and travel programs worldwide",
          duration: "4-12 months",
          cost: "Varies by destination",
          website: "https://swap.ca/",
        },
        {
          name: "WWOOF Canada",
          description: "Work on organic farms across Canada and worldwide",
          duration: "2 weeks - 6 months",
          cost: "Free accommodation",
          website: "https://wwoof.ca/en/",
        },
      ],
    },
    {
      category: "Travel & Learning Programs",
      programs: [
        {
          name: "EF Educational Tours",
          description: "Educational travel experiences with learning components",
          duration: "1-4 weeks",
          cost: "$2,000-$6,000",
          website: "https://www.eftours.ca/",
        },
        {
          name: "Contiki",
          description: "Group travel for 18-35 year olds",
          duration: "1-6 weeks",
          cost: "$1,000-$8,000",
          website: "https://www.contiki.com/",
        },
        {
          name: "Where There Be Dragons",
          description: "Immersive cultural and educational programs",
          duration: "2-12 weeks",
          cost: "$3,000-$15,000",
          website: "https://wheretherebedragons.com/",
        },
        {
          name: "CIEE Gap Year Programs",
          description: "Structured gap year programs with academic credit",
          duration: "3-12 months",
          cost: "$5,000-$25,000",
          website: "https://www.ciee.org/go-abroad/high-school-graduates",
        },
      ],
    },
    {
      category: "Skill Development",
      programs: [
        {
          name: "Lighthouse Labs",
          description: "Intensive coding bootcamps and web development",
          duration: "3-6 months",
          cost: "$10,000-$15,000",
          website: "https://www.lighthouselabs.ca/",
        },
        {
          name: "BrainStation",
          description: "Digital skills training in design, data, and development",
          duration: "3-12 months",
          cost: "$3,000-$15,000",
          website: "https://brainstation.io/",
        },
        {
          name: "NOLS (National Outdoor Leadership School)",
          description: "Wilderness and outdoor leadership programs",
          duration: "1-6 months",
          cost: "$3,000-$12,000",
          website: "https://www.nols.edu/",
        },
        {
          name: "Outward Bound Canada",
          description: "Outdoor education and leadership development",
          duration: "1-4 weeks",
          cost: "$1,500-$5,000",
          website: "https://www.outwardbound.ca/",
        },
        {
          name: "Wealthsimple Work & Learn Program",
          description: "Paid internship program combining work experience with financial literacy",
          duration: "4-12 months",
          cost: "Paid position",
          website: "https://www.wealthsimple.com/en-ca/careers",
        },
      ],
    },
  ]

  const jobPlatforms = [
    {
      category: "Entry-Level Job Platforms",
      platforms: [
        {
          name: "Indeed Canada",
          description: "Canada's largest job search platform with entry-level filters",
          targetAudience: "All job seekers, strong entry-level section",
          website: "https://ca.indeed.com/",
          features: "Resume builder, salary insights, company reviews",
        },
        {
          name: "Job Bank Canada",
          description: "Government of Canada's official job search platform",
          targetAudience: "All Canadians, excellent for new graduates",
          website: "https://www.jobbank.gc.ca/",
          features: "Career exploration, wage information, job market trends",
        },
        {
          name: "Workopolis",
          description: "Canadian job search platform with career resources",
          targetAudience: "Entry to mid-level professionals",
          website: "https://www.workopolis.com/",
          features: "Career advice, salary calculator, job alerts",
        },
        {
          name: "Monster Canada",
          description: "Global job platform with Canadian opportunities",
          targetAudience: "New graduates and career changers",
          website: "https://www.monster.ca/",
          features: "Career coaching, resume services, skill assessments",
        },
      ],
    },
    {
      category: "Student & Graduate Focused",
      platforms: [
        {
          name: "TalentEgg",
          description: "Canada's leading platform for student and new graduate jobs",
          targetAudience: "Students and recent graduates",
          website: "https://talentegg.ca/",
          features: "Internships, co-ops, entry-level positions, career advice",
        },
        {
          name: "Magnet",
          description: "Connects students and new grads with employers",
          targetAudience: "High school and post-secondary students",
          website: "https://magnet.today/",
          features: "Skills-based matching, career exploration, mentorship",
        },
        {
          name: "WaterlooWorks",
          description: "Co-op and career platform (available to many institutions)",
          targetAudience: "Students in co-op programs",
          website: "https://uwaterloo.ca/co-operative-education/",
          features: "Co-op placements, career services, employer connections",
        },
        {
          name: "Riipen",
          description: "Project-based work and internships for students",
          targetAudience: "Students seeking experience",
          website: "https://riipen.com/",
          features: "Project-based learning, industry partnerships, skill building",
        },
      ],
    },
    {
      category: "Retail & Service Industry",
      platforms: [
        {
          name: "Retail Council of Canada Job Board",
          description: "Specialized job board for retail positions across Canada",
          targetAudience: "Entry-level retail workers",
          website: "https://www.retailcouncil.org/",
          features: "Industry-specific jobs, career development resources",
        },
        {
          name: "Snagajob",
          description: "Hourly and part-time job platform",
          targetAudience: "Students and part-time workers",
          website: "https://www.snagajob.com/",
          features: "Quick apply, shift scheduling, hourly positions",
        },
        {
          name: "Kijiji Jobs",
          description: "Local job postings across Canada",
          targetAudience: "Local job seekers, entry-level positions",
          website: "https://www.kijiji.ca/b-jobs/canada/c45l0",
          features: "Local opportunities, part-time work, gig economy jobs",
        },
      ],
    },
    {
      category: "Government & Public Service",
      platforms: [
        {
          name: "GC Jobs",
          description: "Government of Canada job opportunities",
          targetAudience: "All levels, including student programs",
          website: "https://www.canada.ca/en/services/jobs/opportunities/government.html",
          features: "Federal positions, student programs, benefits information",
        },
        {
          name: "Ontario Jobs",
          description: "Ontario government job opportunities",
          targetAudience: "Ontario residents, all experience levels",
          website: "https://www.gojobs.gov.on.ca/",
          features: "Provincial positions, internships, diversity programs",
        },
        {
          name: "Municipal Job Boards",
          description: "City and municipal government positions",
          targetAudience: "Local residents, entry-level municipal work",
          website: "https://www.municipalworld.com/jobs/?location=All",
          features: "Local government jobs, community services, public works",
        },
      ],
    },
  ]

  const filteredContent = (items: any[], searchTerm: string) => {
    if (!searchTerm) return items
    return items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
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
              <Link href="/pathways" className="text-blue-600 font-medium">
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
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Canadian Post-Secondary <span className="text-blue-600">Pathways</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive listings of every university, college, trade program, gap year option, and direct work
              opportunity across Canada.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search programs, schools, trades, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => toggleSection("university")}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Universities</h2>
                <p className="text-gray-600">Research universities and undergraduate institutions across Canada</p>
              </div>
            </div>
            {expandedSections.university ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>

          {expandedSections.university && (
            <div className="space-y-8">
              {Object.entries(universities).map(([province, schools]) => (
                <div key={province}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    {province}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredContent(schools, searchTerm).map((school, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            <a
                              href={school.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-blue-600 transition-colors group"
                            >
                              {school.name}
                              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </CardTitle>
                          <CardDescription>{school.location}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Badge variant="secondary">{school.type}</Badge>
                            <p className="text-sm text-gray-600">{school.programs}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Colleges Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => toggleSection("college")}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Colleges</h2>
                <p className="text-gray-600">Community colleges, polytechnics, and technical institutes</p>
              </div>
            </div>
            {expandedSections.college ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>

          {expandedSections.college && (
            <div className="space-y-8">
              {Object.entries(colleges).map(([province, schools]) => (
                <div key={province}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    {province}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredContent(schools, searchTerm).map((school, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            <a
                              href={school.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-blue-600 transition-colors group"
                            >
                              {school.name}
                              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </CardTitle>
                          <CardDescription>{school.location}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {school.type}
                            </Badge>
                            <p className="text-sm text-gray-600">{school.programs}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skilled Trades Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => toggleSection("trades")}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Skilled Trades</h2>
                <p className="text-gray-600">Training institutions and resources for skilled trades careers</p>
              </div>
            </div>
            {expandedSections.trades ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>

          {expandedSections.trades && (
            <div className="space-y-8">
              {skilledTradesResources.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-orange-600" />
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredContent(category.resources, searchTerm).map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            <a
                              href={resource.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-blue-600 transition-colors group"
                            >
                              {resource.name}
                              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Badge variant="outline">{resource.type}</Badge>
                              <span className="text-xs text-gray-500">{resource.location}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gap Year Programs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => toggleSection("gapYear")}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Plane className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Gap Year Programs</h2>
                <p className="text-gray-600">Structured programs for personal growth and exploration</p>
              </div>
            </div>
            {expandedSections.gapYear ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>

          {expandedSections.gapYear && (
            <div className="space-y-8">
              {gapYearPrograms.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Plane className="h-5 w-5 mr-2 text-purple-600" />
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredContent(category.programs, searchTerm).map((program, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            <a
                              href={program.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-blue-600 transition-colors group"
                            >
                              {program.name}
                              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Badge variant="outline">{program.duration}</Badge>
                              <Badge className="bg-purple-100 text-purple-800">{program.cost}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Direct to Work Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => toggleSection("directWork")}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Briefcase className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Direct to Work Platforms</h2>
                <p className="text-gray-600">Job search platforms and resources for high school graduates</p>
              </div>
            </div>
            {expandedSections.directWork ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>

          {expandedSections.directWork && (
            <div className="space-y-8">
              {jobPlatforms.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-teal-600" />
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredContent(category.platforms, searchTerm).map((platform, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            <a
                              href={platform.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-blue-600 transition-colors group"
                            >
                              {platform.name}
                              <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </CardTitle>
                          <CardDescription>{platform.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">{platform.targetAudience}</p>
                            <Badge className="bg-teal-100 text-teal-800">{platform.features}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Pathfinder</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Comprehensive guide to Canadian post-secondary options for high school students.
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
              <h4 className="font-semibold mb-4">Pathways</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => toggleSection("university")} className="hover:text-white transition-colors">
                    Universities
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("college")} className="hover:text-white transition-colors">
                    Colleges
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("trades")} className="hover:text-white transition-colors">
                    Skilled Trades
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("gapYear")} className="hover:text-white transition-colors">
                    Gap Year
                  </button>
                </li>
                <li>
                  <button onClick={() => toggleSection("directWork")} className="hover:text-white transition-colors">
                    Job Platforms
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
            &copy; 2024 PathFinder. Helping Canadian students navigate their future.
          </div>
        </div>
      </footer>
    </div>
  )
}
