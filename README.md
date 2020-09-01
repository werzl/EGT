# Essex Grade Tracker
![CI](https://github.com/werzl/EGT/workflows/CI/badge.svg)
![CD](https://github.com/werzl/EGT/workflows/CD/badge.svg)  
  
Grade tracking and prediction dashboard for University of Essex students.  
  
See it live: [https://werzl.github.io/EGT/](https://werzl.github.io/EGT/)

## How it Works
### User Registration
  
### User Login
  
### Module Selection

### Grade Caclulations

### Prediction

### Automation
#### CI
The Continuous Integration workflow runs on a Pull Request into master. The build task uses Yarn to build the React project and check for errors. If any errors make it through, the check fails and the fixes need to be made before merging the PR.

#### CD
The Continuous Deployment workflow runs on a merge into master. The build task uses Yarn to build/test the React code, and if successful, Deploys the code to the gh-pages branch.
