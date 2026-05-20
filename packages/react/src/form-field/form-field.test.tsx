import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormField } from './form-field';
import { Input } from '../input';

describe('FormField', () => {
  describe('when composed with label and control', () => {
    it('should associate the label with the input', () => {
      // Arrange
      render(
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Control>
            <Input placeholder="you@example.com" />
          </FormField.Control>
        </FormField>
      );

      // Act
      const input = screen.getByLabelText('Email');

      // Assert
      expect(input).toBeInTheDocument();
    });
  });

  describe('when the label is required', () => {
    it('should show a visible required indicator', () => {
      // Arrange
      render(
        <FormField>
          <FormField.Label required>Username</FormField.Label>
          <FormField.Control>
            <Input />
          </FormField.Control>
        </FormField>
      );

      // Act
      const label = screen.getByText(/Username/);

      // Assert
      expect(label).toHaveTextContent('*');
    });
  });

  describe('when description and error are rendered', () => {
    it('should expose caption and error text', () => {
      // Arrange
      render(
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Description>We will not share your email.</FormField.Description>
          <FormField.Control describedBy="both">
            <Input error />
          </FormField.Control>
          <FormField.Error>Invalid email</FormField.Error>
        </FormField>
      );

      // Act
      const caption = screen.getByText('We will not share your email.');
      const error = screen.getByRole('alert');

      // Assert
      expect(caption).toBeInTheDocument();
      expect(error).toHaveTextContent('Invalid email');
    });
  });

  describe('when error message is empty', () => {
    it('should not render an error element', () => {
      // Arrange
      render(
        <FormField>
          <FormField.Label>Name</FormField.Label>
          <FormField.Error>{''}</FormField.Error>
        </FormField>
      );

      // Act
      const error = screen.queryByRole('alert');

      // Assert
      expect(error).not.toBeInTheDocument();
    });
  });
});
