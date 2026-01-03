# n8n Webhook Integration Guide

## Overview
The booking form is ready to integrate with n8n workflow automation. The form collects customer booking requests and sends them to a webhook endpoint for processing.

## Form Data Structure

When submitted, the booking form sends the following data:

```json
{
  "fullName": "string",
  "phone": "string",
  "serviceType": "string",
  "preferredDate": "string (YYYY-MM-DD)",
  "message": "string",
  "submittedAt": "string (ISO 8601 timestamp)",
  "source": "website",
  "userAgent": "string",
  "referrer": "string"
}
```

## Service Type Options
- `ac-repair` - AC Repairs Harare
- `fridge-repair` - Fridge Repairs Harare
- `gas-refill` - Gas Refill Services
- `auto-ac` - Auto AC Repair
- `electrical-hvac` - Electrical & HVAC

## Integration Steps

### 1. Create n8n Workflow
1. Log in to your n8n instance
2. Create a new workflow
3. Add a "Webhook" node as the trigger
4. Set the webhook method to POST
5. Copy the webhook URL

### 2. Update the BookingForm Component
In `src/components/BookingForm.tsx`, update the form submission:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const submitData = {
    ...formData,
    submittedAt: new Date().toISOString(),
    source: 'website',
    userAgent: navigator.userAgent,
    referrer: document.referrer || 'direct',
  };

  try {
    const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    });

    if (response.ok) {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setIsSubmitting(false);
    alert('There was an error submitting your booking. Please try calling us directly.');
  }
};
```

### 3. n8n Workflow Suggestions

After receiving the webhook data, you can:

1. **Send Email Notification**
   - Add a "Send Email" node
   - Configure it to send booking details to Coolnet's email

2. **Send SMS Notification**
   - Add an SMS service node
   - Send confirmation to customer's phone

3. **Add to Google Sheets**
   - Log all bookings to a spreadsheet for tracking

4. **WhatsApp Notification**
   - Send booking details via WhatsApp Business API

5. **Create Calendar Event**
   - Automatically add to Google Calendar

6. **CRM Integration**
   - Add customer to your CRM system

## Example n8n Workflow

```
Webhook Trigger
    ↓
Set Variables (Parse data)
    ↓
[Split into parallel branches]
    ↓                    ↓                    ↓
Email to Coolnet    SMS to Customer    Add to Sheet
```

## Testing

Before going live:
1. Test the webhook URL with a tool like Postman
2. Submit a test booking through the form
3. Verify data is received correctly in n8n
4. Check all automated actions work as expected

## Security Notes

- Store the webhook URL in an environment variable
- Consider adding webhook authentication
- Implement rate limiting to prevent spam
- Validate all incoming data in n8n

## Support

For questions about the form implementation, contact your web developer.
For n8n workflow questions, refer to n8n documentation.
