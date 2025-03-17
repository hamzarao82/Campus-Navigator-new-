import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { THEME } from '../config/constants';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by boundary:', error);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Oops! Something went wrong</Text>
          <Text style={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleRetry}
          >
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: THEME.spacing.lg,
    backgroundColor: THEME.colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: THEME.spacing.md,
    color: THEME.colors.text,
  },
  message: {
    textAlign: 'center',
    marginBottom: THEME.spacing.lg,
    color: THEME.colors.textSecondary,
  },
  button: {
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: THEME.spacing.lg,
    paddingVertical: THEME.spacing.md,
    borderRadius: THEME.borderRadius.md,
  },
  buttonText: {
    color: THEME.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
