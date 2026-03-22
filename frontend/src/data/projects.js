export const projects = [
  {
    slug: 'p2p-gpu-allocation',
    title: 'P2P GPU Allocation System',
    shortDescription: 'Deployed platform to manage and allocate GPU resources efficiently securely over remote tunnels.',
    fullDescription: 'A robust Peer-to-Peer GPU resource allocation platform built to manage system resources efficiently across distributed nodes. It securely monitors, allocates, and tunnels resources in real-time, allowing users to share computing power seamlessly.',
    techStack: ['Node.js', 'Express', 'React', 'Python', 'Docker', 'Ngrok', 'MongoDB'],
    features: [
      'Real-time GPU monitoring and allocation',
      'Secure remote tunneling via Ngrok',
      'Python-based hardware metric polling',
      'MERN stack web dashboard for resource visualization'
    ],
    githubUrl: 'https://github.com/nigel2405',
    liveUrl: 'https://gpu-sharing-frontend.onrender.com/',
    challenges: 'One of the major challenges was establishing stable, persistent WebSocket connections across Ngrok tunnels. This was solved by configuring specific namespace bindings and implementing robust reconnection and heartbeat logic in both the Python daemon and Node.js backend.'
  },
  {
    slug: 'smart-rfid-attendance',
    title: 'Smart RFID Attendance System',
    shortDescription: 'Role-based attendance tracking system with real-time database and hardware syncing.',
    fullDescription: 'A full-stack hardware integration project featuring role-based dashboards for Admins, Teachers, and Students. It interfaces physical RFID scanners with a Node.js backend to provide real-time, automated tracking and reporting.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'IoT Hardware', 'C++'],
    features: [
      'Automated real-time attendance logging',
      'Role-based Access Control (Admin, Teacher, Student)',
      'Secure RESTful API for hardware communication',
      'Comprehensive reporting dashboards'
    ],
    githubUrl: 'https://github.com/nigel2405',
    liveUrl: null,
    challenges: 'Designing a schema that could efficiently handle hundreds of rapid, concurrent scans without database locking was a hurdle. We utilized bulk operations and optimized indexing within MongoDB to ensure the API never bottlenecks the physical hardware scanners.'
  },
  {
    slug: 'tripo-ride-booking',
    title: 'TripO – Ride Booking Startup',
    shortDescription: 'A real-time ride tracking startup project with scalable mobile interfaces.',
    fullDescription: 'TripO is a ride booking application similar to BlaBlaCar, but optimized for specific local transit modes. Features real-time mapping, tokenized authentication, and live database operations for matching riders with drivers.',
    techStack: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Google Maps API'],
    features: [
      'Real-time geolocation tracking',
      'Scalable mobile interface with React Native',
      'JWT-secured user authentication',
      'Live ride matching and bidding backend'
    ],
    githubUrl: 'https://github.com/nigel2405',
    liveUrl: null,
    challenges: 'Building a responsive mobile UI that smoothly rendered live map updates without draining battery or causing memory leaks in React Native required extensive memoization and throttling of the geolocation API calls.'
  }
];
