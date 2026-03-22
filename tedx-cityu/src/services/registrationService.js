import { supabase } from '../supabaseClient';

export const submitRegistration = async (registrationData) => {
  try {
    const { data, error } = await supabase
      .from('registration')
      .insert([
        {
          name: registrationData.name,
          email_address: registrationData.email,
          phone_number: registrationData.phone,
          is_cityu_student: registrationData.isCityUStudent,
          student_id: registrationData.isCityUStudent ? registrationData.studentId : null,
          requires_guest_pass: !registrationData.isCityUStudent ? registrationData.requiresGuestPass : null,
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Registration error:', error.message);
    return { success: false, error: error.message };
  }
};

export const fetchAllRegistrations = async () => {
  try {
    const { data, error } = await supabase
      .from('registration')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Fetch error:', error.message);
    return { success: false, error: error.message };
  }
};
