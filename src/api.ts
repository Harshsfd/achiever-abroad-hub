// Since this is a frontend-only project, we'll create mock data
// In a real project, this would connect to your backend API

const API_URL = "http://localhost:5000/api"; // Change this for production

// Mock data for frontend-only demo
const mockServices = [
  {
    _id: "1",
    title: "Free Counselling",
    description: "Get expert guidance to choose the right program and university that matches your profile and career goals.",
    features: [
      "One-on-one counseling sessions",
      "Career guidance and assessment", 
      "Course and university selection",
      "Application timeline planning"
    ],
    icon: "MessageSquare"
  },
  {
    _id: "2", 
    title: "Guaranteed Admission",
    description: "We ensure your admission to top universities with our proven track record and strong partnerships.",
    features: [
      "100% admission guarantee",
      "Strong university partnerships",
      "Application preparation and review",
      "Interview preparation support"
    ],
    icon: "GraduationCap"
  },
  {
    _id: "3",
    title: "Best Scholarships", 
    description: "Access exclusive scholarships and financial aid opportunities to make your dream affordable.",
    features: [
      "Merit-based scholarships",
      "Need-based financial aid",
      "University-specific grants", 
      "Application assistance"
    ],
    icon: "DollarSign"
  }
];

const mockTestimonials = [
  {
    _id: "1",
    name: "Sarah Johnson",
    university: "Harvard University",
    country: "USA",
    course: "Computer Science",
    rating: 5,
    message: "A-SAC helped me secure admission to my dream university with a full scholarship. Their guidance was invaluable throughout the entire process.",
    image: "",
    date: "2024-01-15"
  },
  {
    _id: "2", 
    name: "Raj Patel",
    university: "Oxford University",
    country: "UK", 
    course: "Business Administration",
    rating: 5,
    message: "The team at A-SAC was incredibly supportive. From application to visa, they guided me every step of the way.",
    image: "",
    date: "2024-02-20"
  }
];

const mockBlogs = [
  {
    _id: "1",
    title: "Top 10 Universities for Computer Science in 2024",
    content: "Detailed analysis of the best computer science programs worldwide...",
    excerpt: "Discover the top-ranked universities offering exceptional computer science programs with cutting-edge research opportunities.",
    author: "Dr. Smith",
    date: "2024-03-01", 
    category: "University Rankings",
    readTime: 8,
    featured: true
  },
  {
    _id: "2",
    title: "Scholarship Opportunities for International Students",
    content: "Comprehensive guide to available scholarships...",
    excerpt: "Learn about various scholarship programs available for international students pursuing higher education abroad.",
    author: "Jane Doe",
    date: "2024-02-28",
    category: "Scholarships", 
    readTime: 6,
    featured: false
  }
];

export async function sendContactForm(data: { name: string; email: string; message: string }) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
}

export async function getServices(): Promise<any[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServices);
    }, 500);
  });
}

export async function getTestimonials(): Promise<any[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTestimonials);
    }, 500);
  });
}

export async function getBlogs(): Promise<any[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBlogs);
    }, 500);
  });
}