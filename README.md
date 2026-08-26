# Nexa Design System

An experimental **AI-native design system** built in Claude Design, exploring how design systems can be structured for AI to understand, build with, and eventually consume.

## About

Traditional design systems are largely built by designers, for designers. This experiment explores a different model:

> **Human defines the intent. AI builds and consumes the system.**

The goal is not to remove human design judgment, but to understand what needs to change when AI becomes an active consumer of the design system.

## What this experiment explores

- How **primitive and semantic tokens** can be structured for AI consumption
- How design intent and semantic relationships need to be documented
- How **components** can be defined beyond their visual appearance
- How structured documentation can help AI understand component purpose, usage and constraints
- Whether AI can reliably **consume an existing design system** when creating new interfaces
- Where AI succeeds, where it needs correction, and where the system itself needs to evolve

## Design System Structure

### Primitive Tokens

The foundational visual values:

- Colors
- Typography
- Spacing
- Corner Radius
- Elevation
- Borders
- Icons

### Semantic Tokens

Primitive values are mapped to meaningful roles and documented through their purpose and intended consumption.

### Components

The MVP component library includes components such as:

- Primary Button
- Icon Button
- Search Field
- Tab
- Select
- Count Badge
- Avatar
- Navigation Item
- Breadcrumb
- Label & Value Field
- Menu
- Tooltip
- Toast
- Empty State

## How it was built

**Claude Design** was used as the primary environment to build and test the design system.

**ChatGPT** was used as a reasoning partner to question decisions, structure the system, identify gaps and help interpret findings.

An **Excel-based component definition framework** was also used to structure the knowledge required for each component before using AI to build the documentation.

## Consumption Test

The system is ultimately tested by asking AI to recreate a real interface using the design system rather than designing from scratch.

The test helps identify:

- Which components AI can correctly recognise and reuse
- Which design decisions AI can infer
- Which rules need to be made more explicit
- Where the design system is incomplete
- Where human correction is still required

## Current Status

This is a **work-in-progress POC**, not a production-ready design system.

The system is intentionally being built and tested iteratively. Findings from consumption tests may result in changes to the token structure, component definitions, documentation or system architecture.

The purpose is to document the learning process—not present a polished answer.

## The Core Question

> **What changes when a design system is no longer built primarily for designers, but is structured so AI can understand, build with and consume it?**

This repository is part of that exploration.
