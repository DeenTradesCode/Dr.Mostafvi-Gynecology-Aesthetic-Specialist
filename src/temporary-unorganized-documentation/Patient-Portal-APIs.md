# Patient Portal APIs & External Services – Dr. Mastafavi

## Overview

This document outlines the APIs, external services, and separate applications required to support the Patient Portal functionality. These components work in conjunction with the main website and portal frontend to provide a complete patient management system.

## API Endpoints

### Authentication Service

#### Social Login Integration

- **Google OAuth 2.0**
  - Endpoint: `POST /api/auth/google`
  - Purpose: Authenticate users with Google accounts
  - Returns: JWT token, user profile data
  - Required: Google OAuth client configuration

- **Apple Sign-In**
  - Endpoint: `POST /api/auth/apple`
  - Purpose: Authenticate users with Apple ID
  - Returns: JWT token, user profile data
  - Required: Apple Developer account, Sign in with Apple configuration

- **Facebook Login**
  - Endpoint: `POST /api/auth/facebook`
  - Purpose: Authenticate users with Facebook accounts
  - Returns: JWT token, user profile data
  - Required: Facebook App configuration

#### Traditional Authentication

- **Email/Password Login**
  - Endpoint: `POST /api/auth/login`
  - Purpose: Authenticate with email and password
  - Body: `{ email: string, password: string }`
  - Returns: JWT token, user profile

- **Account Creation**
  - Endpoint: `POST /api/auth/register`
  - Purpose: Create new patient accounts
  - Body: `{ email: string, password: string, profile: PatientProfile }`
  - Returns: JWT token, user profile

- **Password Reset**
  - Endpoint: `POST /api/auth/reset-password`
  - Purpose: Send password reset email
  - Body: `{ email: string }`

### Appointment Management API

#### Availability System

- **Get Available Slots**
  - Endpoint: `GET /api/availability?date=YYYY-MM-DD`
  - Purpose: Retrieve available appointment times for a specific date
  - Query Parameters: `date` (required), `service_type` (optional)
  - Returns: Array of available time slots
  - Mock Response Example:

  ```json
  {
    "date": "2025-10-05",
    "available_slots": [
      { "time": "09:00", "duration": 30, "type": "standard" },
      { "time": "10:30", "duration": 30, "type": "standard" },
      { "time": "14:00", "duration": 60, "type": "consultation" }
    ]
  }
  ```

#### Appointment Booking

- **Create Appointment**
  - Endpoint: `POST /api/appointments`
  - Purpose: Book a new appointment
  - Body: `AppointmentRequest`
  - Returns: Confirmation details with masked patient info
  - Example Request:

  ```json
  {
    "patient_id": "uuid",
    "date": "2025-10-05",
    "time": "09:00",
    "service_type": "gynecology",
    "reason": "Annual checkup",
    "insurance_provider": "Blue Cross Blue Shield",
    "is_guest": false
  }
  ```

- **Get Patient Appointments**
  - Endpoint: `GET /api/appointments?patient_id=uuid`
  - Purpose: Retrieve patient's appointment history
  - Query Parameters: `patient_id`, `status` (optional), `limit` (optional)
  - Returns: Array of appointments with masked sensitive data

- **Update Appointment**
  - Endpoint: `PUT /api/appointments/:id`
  - Purpose: Reschedule or modify existing appointments
  - Body: Updated appointment details
  - Returns: Updated appointment confirmation

- **Cancel Appointment**
  - Endpoint: `DELETE /api/appointments/:id`
  - Purpose: Cancel an existing appointment
  - Returns: Cancellation confirmation

### Patient Data Management

#### Patient Profile

- **Get Patient Profile**
  - Endpoint: `GET /api/patients/:id`
  - Purpose: Retrieve patient information (masked for security)
  - Returns: Patient profile with masked sensitive fields

- **Update Patient Profile**
  - Endpoint: `PUT /api/patients/:id`
  - Purpose: Update patient contact and insurance information
  - Body: `PatientProfileUpdate`
  - Rate Limiting: 30-day limit for insurance changes
  - Returns: Updated profile confirmation

#### Data Masking Utilities

- **Mask Sensitive Data**
  - Endpoint: `POST /api/utils/mask-data`
  - Purpose: Apply consistent data masking for display
  - Body: `{ data: any, fields: string[] }`
  - Returns: Masked data object
  - Masking Rules:
    - DOB: `MM/**/YYYY`
    - Phone: `--1234`
    - Email: `j***@gmail.com`
    - SSN: `***-**-1234`

### Notification System

#### Email Notifications

- **Appointment Confirmation**
  - Endpoint: `POST /api/notifications/email/appointment-confirmation`
  - Purpose: Send appointment confirmation emails
  - Triggers: After successful booking

- **Appointment Reminders**
  - Endpoint: `POST /api/notifications/email/appointment-reminder`
  - Purpose: Send 24-hour appointment reminders
  - Triggers: Scheduled daily batch job

- **Password Reset**
  - Endpoint: `POST /api/notifications/email/password-reset`
  - Purpose: Send password reset instructions
  - Triggers: Password reset request

#### SMS Notifications (Future)

- **Appointment Reminders**
  - Endpoint: `POST /api/notifications/sms/reminder`
  - Purpose: Send SMS appointment reminders
  - Status: Planned for future implementation

## External Services

### Email Service Provider

- **Provider**: SendGrid or AWS SES
- **Purpose**: Transactional email delivery
- **Templates Required**:
  - Appointment confirmation
  - Appointment reminders
  - Password reset instructions
  - Welcome emails for new accounts

### Database System

- **Primary Database**: PostgreSQL or MongoDB
- **Purpose**: Store patient data, appointments, authentication tokens
- **Security Requirements**:
  - Encryption at rest
  - HIPAA compliance considerations
  - Regular backups
  - Access logging

### File Storage

- **Provider**: AWS S3 or Google Cloud Storage
- **Purpose**: Store patient documents, insurance cards (future)
- **Security**: Encrypted storage with access controls

### Payment Processing (Future)

- **Provider**: Stripe or Square
- **Purpose**: Process copayments and self-pay appointments
- **Status**: Not required for initial prototype

## Mock Data Services

### Availability Mock Service

- **Purpose**: Simulate realistic appointment availability
- **Implementation**: Static JSON files or simple database
- **Data Structure**:

  ```json
  {
    "2025-10-05": {
      "available_slots": [
        { "time": "09:00", "type": "standard", "duration": 30 },
        { "time": "10:30", "type": "standard", "duration": 30 },
        { "time": "14:00", "type": "consultation", "duration": 60 }
      ],
      "unavailable_reasons": {
        "09:30": "Existing appointment",
        "11:00": "Lunch break"
      }
    }
  }
  ```

### Insurance Provider Mock Data

- **Purpose**: Provide realistic insurance provider options
- **Data**: List of common insurance providers with validation rules
- **Implementation**: Static JSON configuration

## Security & Compliance

### Data Protection

- **Encryption**: All sensitive data encrypted in transit and at rest
- **Access Control**: Role-based access to patient data
- **Audit Logging**: All data access and modifications logged
- **Data Masking**: Consistent masking rules for sensitive information

### HIPAA Considerations

- **Business Associate Agreements**: Required for all third-party services
- **Data Minimization**: Collect only necessary patient information
- **Access Controls**: Strict authentication and authorization
- **Incident Response**: Plan for data breach scenarios

### Rate Limiting

- **API Endpoints**: Rate limiting to prevent abuse
- **Account Creation**: Prevent spam account creation
- **Password Reset**: Limit reset attempts per email
- **Profile Updates**: 30-day limit for insurance changes

## Development Environment

### Local Development Setup

- **Database**: Docker container with PostgreSQL
- **Mock Services**: Node.js/Express mock API server
- **Environment Variables**: Separate configs for dev/staging/prod
- **API Documentation**: Swagger/OpenAPI specifications

### Testing Strategy

- **Unit Tests**: Individual API endpoint testing
- **Integration Tests**: End-to-end workflow testing
- **Security Tests**: Authentication and authorization testing
- **Performance Tests**: Load testing for appointment booking

## Implementation Phases

### Phase 1: Core APIs (MVP)

- Authentication endpoints
- Basic appointment booking
- Mock availability service
- Email notifications

### Phase 2: Enhanced Features

- Patient dashboard APIs
- Appointment management
- Advanced data masking
- Audit logging

### Phase 3: Future Enhancements

- SMS notifications
- Payment processing
- Document upload
- Advanced scheduling features

## API Documentation

### Authentication Headers

```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

### Success Response Format

```json
{
  "success": true,
  "data": {
    /* response data */
  },
  "meta": {
    "timestamp": "2025-01-27T10:30:00Z",
    "request_id": "uuid"
  }
}
```

## Deployment Considerations

### Infrastructure Requirements

- **Server**: Node.js/Python backend service
- **Database**: Managed database service (AWS RDS, Google Cloud SQL)
- **Load Balancer**: For high availability
- **CDN**: For static assets and API responses
- **Monitoring**: Application performance monitoring (APM)

### Environment Configuration

- **Development**: Local development with mock services
- **Staging**: Production-like environment for testing
- **Production**: Full security and performance optimization

This API specification provides the foundation for implementing a robust, secure, and scalable patient portal system that integrates seamlessly with the existing Dr. Mostafavi website.
