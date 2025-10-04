---
mode: agent
description: 'Generate a comprehensive feature specification document'
---

# Feature Specification Generator

You are tasked with creating a comprehensive feature specification document.

## Task

Based on the feature description provided by the user, create a detailed specification document that will be saved as:
- **Location**: `specs/<feature-name>/<feature-name>.md`
- **Format**: Markdown with clear sections and actionable requirements

## Specification Structure

Your specification document MUST include the following sections:

### 1. Feature Overview
- **Feature Name**: Clear, concise name
- **Purpose**: What problem does this solve?

### 2. Functional Requirements
List all functional requirements as user stories:
- As a [user type], I want to [action], so that [benefit]
- Include acceptance criteria for each user story
- Use numbered lists for clarity

### 3. Technical Requirements

#### 3.1 Data Model
- Define TypeScript interfaces needed
- Specify data types and validation rules
- Include relationships with existing models

#### 3.2 API Endpoints (if applicable)
- HTTP method and path
- Request/response schemas
- Error handling scenarios

#### 3.3 Service Layer
- Service classes needed
- Method signatures
- Dependencies and injection points

#### 3.4 Controllers
- Controller classes needed
- Route handlers and their responsibilities
- Middleware requirements

#### 3.5 Views (if applicable)
- Template files needed
- UI/UX considerations with DaisyUI components

### 4. Architecture Decisions

#### 4.1 Design Patterns
- Which patterns will be used (Service Layer, Repository, etc.)
- Why these patterns are appropriate

#### 4.2 Dependencies
- New npm packages required (with latest versions)
- Justification for each dependency
- Type definitions needed

### 5. Implementation Plan

#### 5.1 Phase 1: Foundation
- Data models and interfaces
- Service layer implementation
- Unit tests for services

#### 5.2 Phase 2: Integration
- Controllers and routes
- Middleware and validation
- Integration tests

#### 5.3 Phase 3: Presentation
- View templates with DaisyUI
- CSS styling with Tailwind
- Responsive design

### 6. Implementation Status

> **Instructions:** Update this section as each phase is completed. Change status from ❌ to ✅ and add completion timestamp in UTC (format: YYYY-MM-DDTHH:MM:SSZ).

Track the progress of implementation phases:

#### Phase 1: Foundation
- **Status**: ❌ Not Started
- **Completed on**: _Not yet completed_
- **Tasks**:
  - [ ] Data models and interfaces
  - [ ] Service layer implementation
  - [ ] Unit tests for services

#### Phase 2: Integration
- **Status**: ❌ Not Started
- **Completed on**: _Not yet completed_
- **Tasks**:
  - [ ] Controllers and routes
  - [ ] Middleware and validation
  - [ ] Integration tests

#### Phase 3: Presentation
- **Status**: ❌ Not Started
- **Completed on**: _Not yet completed_
- **Tasks**:
  - [ ] View templates with DaisyUI
  - [ ] CSS styling with Tailwind
  - [ ] Responsive design

#### Overall Implementation Status
- **Started**: _Not yet started_
- **Progress**: 0% (0/3 phases completed)
- **Estimated Completion**: _TBD_
- **Actual Completion**: _Not yet completed_

**Notes:**
- Add any implementation blockers or challenges here
- Document any deviations from the original plan
- Include links to related PRs or commits

### 7. Testing Strategy

#### 7.1 Unit Tests
- Service layer test cases
- Mock dependencies
- Edge cases and error scenarios

#### 7.2 Integration Tests
- API endpoint tests
- Route handler tests

### 8. Security Considerations
- Input validation requirements
- Authentication/authorization needs
- Data sanitization
- Error handling without data leaks

### 9. UI/UX Requirements (if applicable)

#### 9.1 User Interface
- DaisyUI components to use

#### 9.2 User Experience
- User flows
- Loading states
- Error states
- Success feedback

### 10. Migration Strategy (if applicable)
- Impact on existing features
- Data migration steps
- Backward compatibility
- Rollback plan

### 11. Documentation Requirements
- README updates needed
- Code documentation (JSDoc)
- API documentation (if applicable)
- User guide (if applicable)

### 12. Success Metrics
- How we'll measure success
- User acceptance criteria
- Technical acceptance criteria

### 13. Questions to Consider

> **Instructions:** Review each question below and provide your answer. Update the status to "Answered" once decisions are made.

Include relevant questions that stakeholders should answer before or during implementation. Format each question as follows:

#### Question Template
**Question:** [Clear, specific question about implementation details or feature scope]

**Options:**
- [ ] Option 1
- [ ] Option 2
- [ ] Option 3

**Answer:** 
```
[Stakeholder response goes here]
```

**If applicable, conditional follow-up:**
- Additional requirement 1: `[details]`
- Additional requirement 2: `[details]`

## Appendices (as needed)

Include appendices for detailed reference information:
- **Appendix A**: Field specifications, validation rules, error messages
- **Appendix B**: Example data, request/response samples
- **Appendix C**: Technology stack reference, dependencies table

---

## Output Format

Create the specification document following this structure. Use:
- Clear, concise language
- Markdown formatting with proper headings
- Code blocks for method signatures, data models, etc.
- Bullet points and numbered lists for readability

## Quality Checklist

Before finalizing the spec, ensure:
- ✅ All sections are completed
- ✅ Technical details align with project architecture
- ✅ Dependencies use latest stable versions
- ✅ Testing strategy is comprehensive
- ✅ Security considerations are addressed
- ✅ Implementation is broken into manageable phases
- ✅ Implementation Status section is properly initialized
- ✅ Success metrics are measurable
- ✅ Documentation requirements are clear
- ✅ Questions to Consider section includes relevant stakeholder decision points
- ✅ Questions are formatted with checkboxes, answer sections, and conditional follow-ups

## Next Steps

After creating the specification:
1. Save to `specs/<feature-name>/<feature-name>.md`
2. Create the folder structure if it doesn't exist
3. Review the "Questions to Consider" section with stakeholders
4. Update document status once stakeholder responses are received
5. Ask if the user wants to proceed with implementation after questions are answered
6. Suggest creating related documentation or diagrams

## Implementation Workflow

When implementing each phase:
1. **Before starting a phase**: Verify all prerequisites are met
2. **During implementation**: Check off tasks as they are completed
3. **After completing a phase**: 
   - Update the phase status from ❌ to ✅
   - Add the completion timestamp in UTC (format: YYYY-MM-DDTHH:MM:SSZ, e.g., 2025-10-04T14:30:00Z)
   - Update the overall progress percentage
   - Document any challenges or deviations in the Notes section
   - Run all quality checks (Biome, type-check, tests)
4. **When all phases are complete**:
   - Update "Actual Completion" timestamp in UTC
   - Verify all tasks are checked off
   - Ensure 100% progress is reflected



Now, please generate the feature specification based on the user's description.
