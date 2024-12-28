import './App.css';
import { GithubCard } from "github-user-repo-card";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineProject, AiOutlineArrowUp, AiOutlineQuestion } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import fetchRepoCount from './hooks/fetchRepoCount';

const App = () => {
  const [Projects, setProjects] = useState(0);

  useEffect(() => {
    const Function = async () => {
      setProjects(await fetchRepoCount());
    }
    Function();
  }, [])
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Privacy Policy for Sufara</h1>

      <p>
        Welcome to Sufara! This privacy policy explains our practices regarding your data when you use our app. By using Sufara, you agree to the terms of this privacy policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not collect any information from our users. Sufara is designed to provide a learning experience without gathering personal or usage data.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        As we do not collect any information, we do not use or process your data in any way.
      </p>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not share any information because we do not collect any information.
      </p>

      <h2>4. Data Security</h2>
      <p>
        Since we do not collect any data, there is no data to secure. Your privacy is fully protected when using Sufara.
      </p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. Changes will be effective upon posting to the app. We encourage you to review this policy periodically.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at [your contact email].
      </p>

      <p>
        This privacy policy is effective as of [date].
      </p>
    </div>
  );
}

export default App;
