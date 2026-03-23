import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { submitRegistration } from '../services/registrationService';
import p1 from '../Assets/About/p1.png';
import p2 from '../Assets/About/p2.png';
import p3 from '../Assets/About/p3.png';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f4f4f4;
  background-image: radial-gradient(#cfcfcf 1.3px, transparent 1.3px);
  background-size: 15px 15px;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 90%;
  margin: 20px auto 24px;
  height: 380px;

  @media (max-width: 900px) {
    height: 300px;
    gap: 0.8rem;
  }

  @media (max-width: 680px) {
    height: 240px;
    gap: 0.5rem;
  }
`;

const LeftPanel = styled.div`
  flex: 0 0 46%;
  display: grid;
  grid-template-rows: 44% 56%;
  gap: 1rem;

  @media (max-width: 680px) {
    gap: 0.5rem;
  }
`;

const HeroImageBlock = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 4px solid #000000;
  background: #000000;
`;

const AngledHeroImageBlock = styled(HeroImageBlock)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%);
`;

const RightPanel = styled.div`
  flex: 0 0 54%;
  position: relative;
  overflow: hidden;
  border: 4px solid #000000;
  clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%);
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(80%) contrast(1.15);
`;

const TopOverlayText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(1.2rem, 3.8vw, 3rem);
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;
`;

const BottomOverlayText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Bungee', sans-serif;
  font-size: clamp(1.5rem, 4.6vw, 3.4rem);
  line-height: 0.95;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  white-space: normal;
  text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000;

  .register {
    color: #ffffff;
  }

  .now {
    color: #eb0028;
  }
`;

const FormContainer = styled.div`
  max-width: 46rem;
  margin: 24px auto 90px;
  width: 100%;
  background-color: #ffffff;
  border: 6px solid #000000;
  box-shadow: 12px 12px 0 rgba(0, 0, 0, 0.25);
  transform: skewY(-2deg);
  overflow: hidden;
`;

const FormHeader = styled.div`
  background-color: #eb0028;
  border-bottom: 6px solid #000000;
  padding: 1rem 1.5rem;
  margin: 0;
`;

const FormTitle = styled.h2`
  font-family: Bungee, sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #000000;
  transform: skewY(2deg);
`;

const FormBody = styled.div`
  transform: skewY(2deg);
  padding: 1.75rem 1.5rem 2.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: Poppins, sans-serif;
  font-size: 0.95rem;
  color: #1f1f1f;
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  font-family: Poppins, sans-serif;
  padding: 0.75rem 1rem;
  background-color: #fdfdfd;
  border: 3px solid #000000;
  border-radius: 0;
  color: #111111;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #eb0028;
    box-shadow: 4px 4px 0 rgba(235, 0, 40, 0.35);
  }

  &::placeholder {
    color: #8c8c8c;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: #3a3a3a;
  font-size: 0.95rem;
  cursor: pointer;
  gap: 0.55rem;
  background: #ffffff;
  border: 2px solid #000000;
  padding: 0.45rem 0.7rem;
  transition: color 0.2s ease;

  &:hover {
    color: #111111;
  }

  input[type='radio'] {
    cursor: pointer;
    accent-color: #eb0028;
    width: 1rem;
    height: 1rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem 1.5rem;
  background-color: #eb0028;
  color: #ffffff;
  border: 3px solid #000000;
  border-radius: 0;
  font-family: Bungee, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 5px 5px 0 #000000;

  &:hover:not(:disabled) {
    background-color: #c70022;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000000;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  font-family: Poppins, sans-serif;
  text-align: center;
  font-weight: 500;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${(props) =>
    `
    background-color: rgba(244, 67, 54, 0.1);
    color: #F44336;
    border: 1px solid #F44336;
  `}
`;

const SuccessScreen = styled.div`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

const SuccessTitle = styled.h3`
  margin: 0;
  font-family: 'Bungee', sans-serif;
  font-size: clamp(1.3rem, 3.2vw, 2rem);
  color: #eb0028;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const SuccessText = styled.p`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  color: #1f1f1f;
  font-weight: 600;
`;

const getFriendlyErrorMessage = (rawError) => {
  const normalized = (rawError || '').toLowerCase();

  if (
    normalized.includes('registration_email_address_key') ||
    (normalized.includes('duplicate key') && normalized.includes('email')) ||
    normalized.includes('already exists')
  ) {
    return 'This email has already been used to register.';
  }

  if (normalized.includes('network') || normalized.includes('fetch')) {
    return 'Network issue detected. Please check your connection and try again.';
  }

  if (normalized.includes('permission') || normalized.includes('not authorized')) {
    return 'We could not submit your registration due to permission settings. Please contact the team.';
  }

  return 'Registration could not be completed right now. Please try again in a moment.';
};

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isCityUStudent: null,
    studentId: '',
    requiresGuestPass: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStudentChange = (e) => {
    setFormData({
      ...formData,
      isCityUStudent: e.target.value === 'true',
      studentId: '',
      requiresGuestPass: null,
    });
  };

  const handleGuestPassChange = (e) => {
    setFormData({
      ...formData,
      requiresGuestPass: e.target.value === 'true',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!formData.name || !formData.email || !formData.phone || formData.isCityUStudent === null) {
      setMessage('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (formData.isCityUStudent && !formData.studentId) {
      setMessage('Please enter your Student ID');
      setLoading(false);
      return;
    }

    if (!formData.isCityUStudent && formData.requiresGuestPass === null) {
      setMessage('Please specify if you need a guest pass');
      setLoading(false);
      return;
    }

    const result = await submitRegistration(formData);

    if (result.success) {
      setMessage('');
      setIsSubmitted(true);
    } else {
      setMessage(getFriendlyErrorMessage(result.error));
    }

    setLoading(false);
  };

  return (
    <Container>
      <HeroSection>
        <LeftPanel>
          <HeroImageBlock>
            <HeroImage src={p1} alt="TEDx event scene" />
            <TopOverlayText>WHY NOT</TopOverlayText>
          </HeroImageBlock>
          <AngledHeroImageBlock>
            <HeroImage src={p2} alt="TEDx team moment" />
            <BottomOverlayText>
              <span className="register">REGISTER</span>
              <span className="now">NOW</span>
            </BottomOverlayText>
          </AngledHeroImageBlock>
        </LeftPanel>
        <RightPanel>
          <HeroImage src={p3} alt="TEDx audience" />
        </RightPanel>
      </HeroSection>
      <FormContainer>
        <FormHeader>
          <FormTitle>Registration</FormTitle>
        </FormHeader>

        <FormBody>
        {isSubmitted ? (
          <SuccessScreen>
            <SuccessTitle>Registration Successful!</SuccessTitle>
            <SuccessText>See you on April 11, 2026.</SuccessText>
          </SuccessScreen>
        ) : (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+852 XXXX XXXX"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Are you currently a CityUHK Student? *</Label>
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="student"
                  value="true"
                  checked={formData.isCityUStudent === true}
                  onChange={handleStudentChange}
                />
                Yes
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="student"
                  value="false"
                  checked={formData.isCityUStudent === false}
                  onChange={handleStudentChange}
                />
                No
              </RadioLabel>
            </RadioGroup>
          </FormGroup>

          {formData.isCityUStudent === true && (
            <FormGroup>
              <Label htmlFor="studentId">Student ID *</Label>
              <Input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                placeholder="Enter your Student ID"
                required
              />
            </FormGroup>
          )}

          {formData.isCityUStudent === false && (
            <FormGroup>
              <Label>Will you require external access (a guest pass) to enter CityU? *</Label>
              <RadioGroup>
                <RadioLabel>
                  <input
                    type="radio"
                    name="guestPass"
                    value="true"
                    checked={formData.requiresGuestPass === true}
                    onChange={handleGuestPassChange}
                  />
                  Yes
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="guestPass"
                    value="false"
                    checked={formData.requiresGuestPass === false}
                    onChange={handleGuestPassChange}
                  />
                  No
                </RadioLabel>
              </RadioGroup>
            </FormGroup>
          )}

          {message && <Message>{message}</Message>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'REGISTERING...' : 'REGISTER'}
          </SubmitButton>
        </form>
        )}
        </FormBody>
      </FormContainer>
    </Container>
  );
}
