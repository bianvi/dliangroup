import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Metamorphosis: The 2026 Spring Collection",
    client: "Aura Haute Couture",
    category: "Event Organization",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
    year: "2026",
    duration: "6 months",
    overview: "A fully immersive holographic runway show that redefined the fashion experience. We integrated real-time motion tracking with high-fidelity projections to create a living, breathing environment for the collection.",
    challenge: "Synchronizing live models with complex holographic overlays in a 360-degree viewing arena without any latency.",
    solution: "Developed a custom low-latency tracking system using LiDAR sensors and high-performance rendering nodes to ensure perfect alignment between physical and digital elements.",
    outcome: "The show was hailed as a milestone in fashion technology, reaching over 10 million viewers online and setting a new standard for luxury brand activations.",
    results: [
      { label: "Online Reach", value: "10M+" },
      { label: "Attendee Satisfaction", value: "98%" },
      { label: "Press Mentions", value: "500+" }
    ],
    technologies: ["Holographic Projection", "LiDAR Tracking", "Unreal Engine 5", "Spatial Audio"]
  },
  {
    id: 2,
    title: "Beyond the Horizon – Brand Film",
    client: "Nexus Electric Vehicles",
    category: "Production House",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
    year: "2025",
    duration: "4 months",
    overview: "A cinematic brand film for the launch of the Nexus EV line. We utilized advanced virtual production techniques to create seamless, otherworldly environments that highlighted the vehicle's futuristic design.",
    challenge: "Capturing realistic reflections and lighting on the vehicle's metallic surfaces while shooting in a virtual environment.",
    solution: "Used a massive 180-degree LED Volume wall to provide real-time environment lighting and reflections, significantly reducing post-production time and enhancing realism.",
    outcome: "The film became the most successful launch campaign in the client's history, driving a 40% increase in pre-orders within the first week.",
    results: [
      { label: "Pre-orders", value: "+40%" },
      { label: "Video Views", value: "5M+" },
      { label: "Production Speed", value: "2x Faster" }
    ],
    technologies: ["Virtual Production", "LED Volume", "Arri Alexa 35", "Unreal Engine 5"]
  },
  {
    id: 3,
    title: "The Cosmic Portal VR",
    client: "Global Science Museum",
    category: "Immersive Tech Studio",
    image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&q=80&w=1000",
    year: "2024",
    duration: "12 months",
    overview: "A multi-user VR journey through a black hole, designed for educational and entertainment purposes. The experience features integrated biometric feedback to adjust the intensity based on the user's heart rate.",
    challenge: "Creating a comfortable yet intense spatial experience for multiple users simultaneously in a shared physical space.",
    solution: "Implemented a custom spatial synchronization algorithm and used biometric sensors to dynamically scale the visual complexity and movement intensity.",
    outcome: "The exhibit has become the museum's most popular attraction, with a permanent installation planned for three other global locations.",
    results: [
      { label: "Visitor Rating", value: "4.9/5" },
      { label: "Daily Visitors", value: "1,200" },
      { label: "Awards Won", value: "3" }
    ],
    technologies: ["Multi-user VR", "Biometric Feedback", "Unity", "Haptic Systems"]
  },
  {
    id: 4,
    title: "Cyber-Quest Interactive Zone",
    client: "Neo-World Theme Park",
    category: "Amusement Park Facilities",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
    year: "2023",
    duration: "18 months",
    overview: "A 500sqm indoor interactive playground that combines physical movement with digital gaming. Using motion-sensing gesture controls, visitors interact with large-scale projections to complete quests.",
    challenge: "Developing a robust tracking system that could handle high-density crowds and varied lighting conditions in a theme park environment.",
    solution: "Deployed an array of industrial-grade infrared cameras and custom AI vision models to track multiple users' gestures and movements with high precision.",
    outcome: "The zone has significantly increased the park's appeal to younger demographics and has been licensed for expansion into international markets.",
    results: [
      { label: "Dwell Time", value: "+45 min" },
      { label: "Social Shares", value: "100k+" },
      { label: "ROI", value: "12 months" }
    ],
    technologies: ["AI Computer Vision", "Gesture Control", "Large-scale Projection", "TouchDesigner"]
  },
  {
    id: 5,
    title: "The Zenith: Luxury Penthouse Launch",
    client: "Skyline Real Estate",
    category: "Event Organization",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    year: "2025",
    duration: "3 months",
    overview: "An exclusive launch event for a luxury penthouse development, featuring augmented reality property tours and a high-end gala dinner with interactive table projections.",
    challenge: "Creating a high-end atmosphere while integrating complex AR technology that was easy for guests to use.",
    solution: "Developed a custom AR app for tablets provided to guests, allowing them to see the finished penthouse interiors while standing in the construction site.",
    outcome: "Resulted in 70% of units being sold within 48 hours of the event.",
    results: [
      { label: "Sales Rate", value: "70%" },
      { label: "Guest Satisfaction", value: "99%" },
      { label: "Media Impressions", value: "2M+" }
    ],
    technologies: ["Augmented Reality", "Interactive Projection", "Custom App Development"]
  },
  {
    id: 6,
    title: "Oceanic Wonders: Immersive Aquarium",
    client: "Blue Marine Foundation",
    category: "Immersive Tech Studio",
    image: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?auto=format&fit=crop&q=80&w=1000",
    year: "2024",
    duration: "10 months",
    overview: "A digital aquarium experience using 360-degree projections and spatial audio to educate visitors about marine conservation without the use of live animals.",
    challenge: "Creating a realistic underwater environment that felt truly immersive and responsive to visitor presence.",
    solution: "Used high-resolution 8K projections and a network of motion sensors to trigger interactive marine life behaviors as visitors moved through the space.",
    outcome: "Increased educational engagement by 60% and received international acclaim for ethical entertainment.",
    results: [
      { label: "Engagement", value: "+60%" },
      { label: "Visitor Count", value: "500k/yr" },
      { label: "Sustainability Award", value: "Gold" }
    ],
    technologies: ["360 Projection Mapping", "Spatial Audio", "Motion Sensors", "Real-time 3D Rendering"]
  }
];
