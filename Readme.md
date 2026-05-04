# Akan Name Generator 🇬🇭

A beautifully designed web application that generates Akan names based on birth date and gender, celebrating the rich cultural heritage of Ghana.

## Author Information

**Author:** Danson

**GitHub:** Savannah001


## Overview

The Akan Name Generator is an interactive tool that determines your Akan name based on the day of the week you were born. In Akan culture, children are traditionally named according to the day they were born, with distinct names for males and females. This application provides an engaging way to discover your cultural name along with its meaning.

## Features

- **Smart Date Validation**: Validates day, month, and year inputs with real-time feedback
- **Gender Selection**: Intuitive card-based interface for selecting gender
- **Dynamic Results**: Displays the day of birth, Akan name, and its cultural meaning
- **Smooth Animations**: 
  - Shake animation for error feedback
  - Reveal animation when displaying Akan names
  - Smooth scrolling to results
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Accessibility**: Keyboard navigable with proper ARIA support

##  Color Scheme

- **Primary Gold**: `#FFC000`, `#D4A017`, `#B8860B` - Represents the richness of Ghanaian culture
- **Dark Background**: `#0f0f1a` - Creates a premium, elegant feel
- **Card Background**: `#1a1a2e` - Provides contrast while maintaining dark theme
- **Accent Colors**: White, light gray, and subtle gold highlights

##  Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom animations
- **JavaScript** - Interactive functionality and DOM manipulation
- **Google Fonts** - Playfair Display (serif) and Inter (sans-serif) fonts

##  Project Structure

akan-name-generator/

├── index.html # Main HTML structure

├── style.css # Styling and animations

├── script.js # Application logic

└── README.md # Project documentation


## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Google Fonts)

### Installation
1. **Clone the repository**
```bash
git clone https://github.com/Savannah001/AKAN-NAME-GENERATOR-.git

```

## BDD (Behavior-Driven Development)

### Feature: Birth Date Input

Scenario: Valid date entry
  GIVEN user is on the page
  WHEN user enters valid day (1-31), month (1-12), year
  AND clicks "Find My Akan Name"
  THEN system accepts input and generates name

Scenario: Invalid date entry
  GIVEN user enters invalid date (e.g., Feb 30)
  WHEN user submits form
  THEN error message appears and card shakes

Scenario: Empty fields
  GIVEN user leaves any date field empty
  WHEN user submits form
  THEN error "Please fill in all date fields" appears

Scenario: Out-of-range month
  GIVEN user enters month 13
  WHEN user submits form
  THEN error "Month must be between 1 and 12" appears

### Feature: Gender Selection

Scenario: Gender selected
  GIVEN user enters valid birth date
  WHEN user clicks Male or Female card
  THEN card highlights in gold and selection stored

Scenario: Gender not selected
  GIVEN user enters valid birth date
  WHEN user submits without gender selection
  THEN error "Please select a gender" appears

Scenario: Gender changed
  GIVEN user selected Male
  WHEN user clicks Female
  THEN highlight moves to Female, value updates

### Feature: Akan Name Generation

Scenario: Male Sunday birth
  GIVEN date July 16, 2023 (Sunday) and Male selected
  WHEN user submits form
  THEN displays "Sunday", "Kwasi", and Sunday meaning

Scenario: Female Monday birth
  GIVEN date July 17, 2023 (Monday) and Female selected
  WHEN user submits form
  THEN displays "Monday", "Adwoa", and Monday meaning

Scenario: Leap day (Feb 29)
  GIVEN date February 29, 2020
  WHEN user submits form
  THEN calculates correct day and generates name

### Feature: Results Display

Scenario: Animated results
  GIVEN valid form submission
  WHEN name is generated
  THEN result section appears with zoom animation and smooth scroll

Scenario: Complete information
  GIVEN valid form submission
  THEN displays: birth day, Akan name, cultural meaning

Scenario: Reset functionality
  GIVEN results are displayed
  WHEN user clicks "Try another date"
  THEN result section hides, form clears, focus moves to day input


### Feature: Live Validation

Scenario: Error clears on correction
  GIVEN date error is displayed
  WHEN user starts typing in invalid field
  THEN error message disappears automatically

Scenario: Gender error clears on selection
  GIVEN gender error is displayed
  WHEN user selects a gender
  THEN error message disappears

## Contact Information

Email: dansonk899@gmail.com
GitHub: https://github.com/Savannah001


## License and Copyright Information

### MIT License

##### Copyright (c) 2026 [Your Name]

```bash

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

```
