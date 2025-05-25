"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Play,
  Star,
  Clock,
  Users,
  Menu,
  Search,
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  FileText,
  RefreshCw,
  Check,
  GraduationCap,
} from "lucide-react"

export default function LatamAcademyPlatform() {
  const [activeCategory, setActiveCategory] = useState("programming")

  const categories = [
    { id: "programming", name: "Programación", courses: 45 },
    { id: "design", name: "Diseño", courses: 32 },
    { id: "marketing", name: "Marketing", courses: 28 },
    { id: "business", name: "Negocios", courses: 38 },
    { id: "data", name: "Data Science", courses: 25 },
  ]

  const featuredCourses = [
    {
      id: 1,
      title: "React Avanzado y Next.js para Latinoamérica",
      description:
        "Domina React y Next.js desde cero hasta nivel experto con proyectos reales del mercado latinoamericano",
      image: "/placeholder.svg?height=300&width=500",
      instructor: "Ana García",
      rating: 4.9,
      students: 12500,
      duration: "24h",
      progress: 65,
      category: "programming",
      price: "$89",
    },
    {
      id: 2,
      title: "Diseño UX/UI para Startups Latinas",
      description: "Aprende a crear interfaces excepcionales adaptadas a la cultura y necesidades latinoamericanas",
      image: "/placeholder.svg?height=300&width=500",
      instructor: "Carlos Ruiz",
      rating: 4.8,
      students: 8900,
      duration: "18h",
      progress: 0,
      category: "design",
      price: "$79",
    },
    {
      id: 3,
      title: "Marketing Digital para el Mercado Latino",
      description: "Estrategias modernas de marketing digital específicamente diseñadas para Latinoamérica",
      image: "/placeholder.svg?height=300&width=500",
      instructor: "María López",
      rating: 4.7,
      students: 15200,
      duration: "20h",
      progress: 30,
      category: "marketing",
      price: "$69",
    },
  ]

  const coursesByCategory = {
    programming: [
      {
        title: "Python para Data Science en LATAM",
        instructor: "Dr. José Martín",
        rating: 4.9,
        students: 9800,
        duration: "22h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$95",
      },
      {
        title: "JavaScript Moderno y APIs",
        instructor: "Laura Sánchez",
        rating: 4.8,
        students: 11200,
        duration: "16h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$75",
      },
      {
        title: "Machine Learning Aplicado",
        instructor: "Roberto Kim",
        rating: 4.9,
        students: 7600,
        duration: "28h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$120",
      },
      {
        title: "Vue.js Completo",
        instructor: "Elena Torres",
        rating: 4.7,
        students: 5400,
        duration: "14h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$65",
      },
    ],
    design: [
      {
        title: "Figma Profesional",
        instructor: "Diego Morales",
        rating: 4.8,
        students: 6700,
        duration: "12h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$55",
      },
      {
        title: "Adobe Creative Suite",
        instructor: "Sofía Herrera",
        rating: 4.9,
        students: 8900,
        duration: "25h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$110",
      },
      {
        title: "Diseño de Logos",
        instructor: "Andrés Vega",
        rating: 4.6,
        students: 4300,
        duration: "8h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$45",
      },
      {
        title: "Animación 2D",
        instructor: "Carmen Silva",
        rating: 4.8,
        students: 3200,
        duration: "18h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$85",
      },
    ],
    marketing: [
      {
        title: "SEO para Mercados Latinos",
        instructor: "Fernando Castro",
        rating: 4.7,
        students: 9100,
        duration: "15h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$70",
      },
      {
        title: "Google Ads Mastery LATAM",
        instructor: "Patricia Ramos",
        rating: 4.8,
        students: 7800,
        duration: "12h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$80",
      },
      {
        title: "Social Media Strategy",
        instructor: "Miguel Ángel",
        rating: 4.6,
        students: 6500,
        duration: "10h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$60",
      },
      {
        title: "Email Marketing Avanzado",
        instructor: "Lucía Mendoza",
        rating: 4.9,
        students: 5200,
        duration: "8h",
        image: "/placeholder.svg?height=200&width=300",
        price: "$50",
      },
    ],
  }

  const subscriptionPlans = [
    {
      name: "Básico",
      price: "$19",
      period: "/mes",
      description: "Perfecto para comenzar tu aprendizaje profesional",
      features: ["Acceso a 100+ cursos básicos", "Certificados de finalización", "Soporte por email", "Acceso móvil"],
      popular: false,
    },
    {
      name: "Premium",
      price: "$39",
      period: "/mes",
      description: "La opción más popular para profesionales ambiciosos",
      features: [
        "Acceso ilimitado a todos los cursos",
        "Certificados verificados",
        "Soporte prioritario 24/7",
        "Descargas offline",
        "Proyectos prácticos",
        "Mentorías grupales",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "$99",
      period: "/mes",
      description: "Ideal para equipos y organizaciones en crecimiento",
      features: [
        "Todo lo de Premium",
        "Gestión de equipos",
        "Reportes de progreso",
        "Mentorías 1:1",
        "Contenido personalizado",
        "API de integración",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">Latam Academy</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#inicio" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Inicio
                </a>
                <a href="#cursos" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Cursos
                </a>
                <a href="#suscripcion" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Suscripción
                </a>
                <a href="#soporte" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Soporte
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-blue-400">
                <Search className="h-5 w-5" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Iniciar Sesión</Button>
              <Button variant="ghost" size="icon" className="md:hidden text-slate-300">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Encuentra los Mejores Cursos para Ti</h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Descubre, Aprende y Mejora tus Habilidades con nuestra amplia gama de cursos profesionales diseñados para el
            mercado latinoamericano
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="Buscar Cursos..."
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 text-lg py-3"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">Buscar</Button>
            </div>
          </div>

          <Button variant="link" className="text-blue-400 hover:text-blue-300 text-lg">
            Explorar Cursos
          </Button>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center text-white">Nuestros Cursos</h3>

          {/* Featured Courses */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold mb-8 text-slate-200">Cursos Destacados</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    {course.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 p-2">
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-slate-300 mt-1">{course.progress}% completado</p>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-blue-400 transition-colors text-white">
                        {course.title}
                      </CardTitle>
                      <span className="text-blue-400 font-bold text-lg">{course.price}</span>
                    </div>
                    <CardDescription className="text-slate-400">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <span className="text-slate-300">{course.instructor}</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {course.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver Curso</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h4 className="text-2xl font-semibold mb-8 text-slate-200">Explora por Categorías</h4>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 bg-transparent"
                  }
                >
                  {category.name} ({category.courses})
                </Button>
              ))}
            </div>

            {/* Course Carousel */}
            <div className="relative">
              <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                {coursesByCategory[activeCategory as keyof typeof coursesByCategory]?.map((course, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-80 bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base group-hover:text-blue-400 transition-colors text-white">
                          {course.title}
                        </CardTitle>
                        <span className="text-blue-400 font-bold">{course.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-300 mb-3">{course.instructor}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          {course.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">Ver Curso</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="suscripcion" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">Elige tu Plan de Suscripción</h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Accede a contenido premium y acelera tu aprendizaje con nuestros planes diseñados para cada necesidad
              profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-slate-800 border-slate-700 ${plan.popular ? "border-blue-500 scale-105" : ""} transition-all duration-300 hover:border-blue-500`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <CardDescription className="text-slate-400 font-medium">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {plan.popular ? "Comenzar Ahora" : "Seleccionar Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-300 mb-4 font-medium">
              Todos los planes incluyen prueba gratuita de 7 días. Cancela en cualquier momento.
            </p>
            <p className="text-sm text-slate-500">
              Métodos de pago aceptados: Visa, Mastercard, American Express, PayPal
            </p>
          </div>
        </div>
      </section>

      {/* Support and Legal Information */}
      <section id="soporte" className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-white">Soporte y Información Legal</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Mail className="mr-2 h-5 w-5" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-4 w-4 text-slate-400" />
                  <span className="text-slate-200">soporte@latamacademy.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-4 w-4 text-slate-400" />
                  <span className="text-slate-200">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 h-4 w-4 text-slate-400 mt-1" />
                  <span className="text-slate-200">
                    Av. Reforma 123, Piso 15
                    <br />
                    Ciudad de México, CDMX 06600
                    <br />
                    México
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Shield className="mr-2 h-5 w-5" />
                  Información del Negocio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Latam Academy S.A.S.</h4>
                  <p className="text-slate-300 text-sm font-medium">
                    Plataforma líder en educación en línea especializada en el mercado latinoamericano. Ofrecemos cursos
                    profesionales de alta calidad en tecnología, diseño, marketing y negocios.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">
                    <strong className="text-slate-300">Registro Fiscal:</strong> RFC: LAC240101ABC
                    <br />
                    <strong className="text-slate-300">Licencia Comercial:</strong> MX-2024-LA-001
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <FileText className="mr-2 h-5 w-5" />
                  Políticas y Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Términos y Condiciones del Servicio
                </a>
                <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Política de Reembolsos
                </a>
                <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Política de Cancelación
                </a>
                <a href="#" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Restricciones de Exportación
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Refund and Cancellation Policy Summary */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Política de Reembolsos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li>• Reembolso completo dentro de los primeros 7 días</li>
                  <li>• Reembolso proporcional para suscripciones anuales</li>
                  <li>• Procesamiento de reembolsos en 5-7 días hábiles</li>
                  <li>• Contacta a soporte para iniciar el proceso</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Shield className="mr-2 h-5 w-5" />
                  Restricciones Legales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm font-medium">
                  Nuestros servicios están disponibles en toda Latinoamérica. Cumplimos con las regulaciones locales de
                  cada país y las leyes de protección de datos internacionales incluyendo GDPR y normativas locales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">Latam Academy</h4>
              </div>
              <p className="text-slate-300 text-sm font-medium">
                Transformando la educación en línea en Latinoamérica con contenido de calidad profesional y una
                experiencia de aprendizaje excepcional adaptada a nuestro mercado.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-white">Plataforma</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Instructores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Empresas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-white">Soporte</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Estado del Sistema
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Reportar Problema
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-white">Legal</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Accesibilidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Latam Academy S.A.S. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
