import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadPDF() {
  try {
    // Read the PDF from the user read-only context
    const pdfPath = 'user_read_only_context/text_attachments/How_I_Leverage_AI_Rapid_Prototyping-ujmzJ.pdf';
    
    if (!fs.existsSync(pdfPath)) {
      console.error(`PDF file not found at ${pdfPath}`);
      process.exit(1);
    }

    const fileBuffer = fs.readFileSync(pdfPath);
    
    console.log(`Uploading PDF (${fileBuffer.length} bytes)...`);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('case-studies')
      .upload('how-i-work.pdf', fileBuffer, {
        contentType: 'application/pdf',
        upsert: true,
      });

    if (error) {
      console.error('Upload error:', error);
      process.exit(1);
    }

    console.log('✓ PDF uploaded successfully');
    console.log('File path:', data.path);

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('case-studies')
      .getPublicUrl('how-i-work.pdf');

    console.log('Public URL:', urlData.publicUrl);
    console.log('\nAdd this URL to your code:');
    console.log(`pdfUrl="${urlData.publicUrl}"`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

uploadPDF();
