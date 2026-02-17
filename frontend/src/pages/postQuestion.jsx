import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import Question from "../components/question";
import Suggestions from "../components/suggestions";

export default function PostQuestion() {
	const navigate = useNavigate();
	return (
		 <Layout title="New Question">
      <Question />
      <Suggestions />
    </Layout>
	)
}