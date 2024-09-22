# Wefo Assignment Project

## Live Demo
[View the live project here](https://wefo-assignment.vercel.app/)

## Project Overview
This project is a responsive web application showcasing a modern, dark-themed design for a portfolio or agency website. It features a project showcase section and a team member display, demonstrating advanced layout techniques and interactive elements.

## Technologies Used
- React.js
- Tailwind CSS

## Design Approach

### Responsive Design
The layout was crafted with a mobile-first approach, ensuring a seamless experience across various device sizes:

- **Mobile**: Stacked layout for easy scrolling and readability on smaller screens.
- **Tablet**: Improved use of horizontal space with a proper container sizes.
- **Desktop**: Full flex layout utilizing the entire screen real estate effectively.

Tailwind CSS classes were extensively used to implement responsive design, leveraging its built-in breakpoint system for consistent behavior across devices.

### Component Structure
The application is built using reusable React components, promoting code reusability and maintainability:

-Eg : `ProjectShowcase`: Main container for displaying featured works.


## Challenges and Solutions

### Complex Layout Implementation
**Challenge**: Creating the CSS-based shape designs for backgrounds proved to be intricate, especially ensuring they remained responsive.

**Solution**: Overcame this by combining absolute positioning with Flexbox. This approach allowed for precise control over the shape placements while maintaining flexibility in the layout.

### Responsive Team Member Display
**Challenge**: Designing the team member section to look appealing on all screen sizes, including the alternating cylinder patterns on desktop.

**Solution**: Implemented a grid-based layout that adapts to different screen sizes. Used Tailwind's responsive classes to show/hide elements based on screen width, ensuring the design remains clean and functional across all devices.


## Future Improvements
- Implement dark/light mode toggle for enhanced user preference support.
- Add animations to project cards for a more dynamic user experience.
- Integrate a backend to make the project showcase and team member sections dynamically updatable.

## Getting Started
To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

