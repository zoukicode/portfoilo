// Dashboard React avec TailwindCSS
// Fonctionnalités : Statistiques, Projets, Messages, Contenu

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Router } from "express";

export default function Dashboard() {

  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio", date: "2024-05-01" },
    { id: 2, title: "E-commerce App", date: "2024-06-01" },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, name: "Jean", message: "Bonjour, joli site !" },
    { id: 2, name: "Alice", message: "Je veux travailler avec toi" },
  ]);

  const [visits, setVisits] = useState(2450);

  const [content, setContent] = useState({
    about: "Développeur web basé à Lomé...",
    image: "https://placehold.co/300x200",
  });

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">👀 Visites</h2>
            <p className="text-2xl font-bold">{visits}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">📁 Projets</h2>
            <p className="text-2xl font-bold">{projects.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">📨 Messages</h2>
            <p className="text-2xl font-bold">{messages.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Liste des projets */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📁 Projets</h2>
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.id} className="bg-white p-4 rounded shadow">
              <strong>{p.title}</strong> — <span className="text-sm">{p.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Messages */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">👥 Messages</h2>
        <ul className="space-y-2">
          {messages.map((m) => (
            <li key={m.id} className="bg-white p-4 rounded shadow">
              <strong>{m.name}:</strong> {m.message}
            </li>
          ))}
        </ul>
      </div>

      {/* Gestion du contenu */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📝 Contenu du site</h2>
        <div className="bg-white p-4 rounded shadow space-y-4">
          <Textarea
            value={content.about}
            onChange={(e) => setContent({ ...content, about: e.target.value })}
          />
          <Input
            value={content.image}
            onChange={(e) => setContent({ ...content, image: e.target.value })}
          />
          <img
            src={content.image}
            alt="Aperçu"
            className="w-64 h-auto rounded border"
          />
          <Button onClick={() => alert("Contenu mis à jour")}>💾 Enregistrer</Button>
        </div>
      </div>
    </div>
  );
}
