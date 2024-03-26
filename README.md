# Mobile Application Documentation

## Introduction
This documentation outlines the specifications and features of the mobile application developed using React Native with Expo as the underlying framework. The application primarily focuses on fetching job vacancies from LinkedIn's API and presenting them to users in a user-friendly manner.

### Application Overview
The application retrieves job listings from LinkedIn's API and provides users with a streamlined interface to search and filter these listings based on job types such as full-time, part-time, and contractor positions. Additionally, it offers a curated selection of Popular Jobs and Nearby Jobs for enhanced user experience.

## Features
1. **Job Search and Filtering:**
   - Users can search for job vacancies using keywords and filter results based on job types (full-time, part-time, contractor).
  
2. **Popular Jobs:**
   - Displays a horizontal list of popular job listings to showcase trending opportunities.
   
3. **Nearby Jobs:**
   - Presents a vertical list of job vacancies in proximity to the user's location, facilitating local job searches.

4. **Job Details:**
   - Each job listing includes comprehensive details organized into tabs:
     - **About:** Provides an overview of the job position.
     - **Qualifications:** Outlines the required qualifications for the job.
     - **Responsibilities:** Lists the responsibilities associated with the job role.

5. **Apply for Job:**
   - Users can easily apply for a job directly from the application by tapping the "Apply for job" button. Upon tapping, the application opens a browser window with the corresponding job listing on Google for submitting CVs.

## Technical Details
- **Framework:** React Native with Expo
- **API Integration:** Utilizes LinkedIn's API for fetching job listings from RapidAPI service.
- **UI Components:** Custom-designed components for intuitive navigation and display of job information.
- **Navigation:** Implemented navigation stack for seamless transition between screens.
- **State Management:** Utilizes React Context API for managing application state.
- **External Link Handling:** Utilizes Expo's Linking module to handle external URLs, opening them in the device's default browser.

## Conclusion
This documentation provides a comprehensive overview of the mobile application developed using React Native and Expo. By leveraging LinkedIn's API, the application offers users a convenient platform to explore and apply for job opportunities efficiently.
