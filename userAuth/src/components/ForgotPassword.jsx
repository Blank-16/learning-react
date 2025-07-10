import { Link } from "react-router-dom";
import { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Replace with Flask API call - POST /api/forgot-password
        // try {
        //     const response = await fetch('/api/forgot-password', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email })
        //     });
        //
        //     const result = await response.json();
        //
        //     if (response.ok) {
        //         setIsSubmitted(true);
        //     } else {
        //         // Handle error (user not found, etc.)
        //         console.error('Password reset failed:', result.message);
        //         setIsSubmitted(true); // Still show success for security
        //     }
        // } catch (error) {
        //     console.error('Network error:', error);
        //     setIsSubmitted(true); // Show success even on error for security
        // } finally {
        //     setIsLoading(false);
        // }

        // TEMPORARY: Simulate Flask API response (remove when Flask is implemented)
        setTimeout(() => {
            console.log('Password reset requested for:', email);
            setIsSubmitted(true);
            setIsLoading(false);
        }, 1500);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 w-full max-w-md p-8">

                    {/* Success Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl">📧</span>
                        </div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">Check Your Email</h2>
                        <p className="text-gray-600 text-sm">
                            We've sent a password reset link to your email address
                        </p>
                    </div>

                    {/* Success Message */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                        <p className="text-emerald-800 text-sm text-center">
                            If an account with email <strong>{email}</strong> exists, you will receive a password reset link shortly.
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 text-sm mb-4">
                            Didn't receive the email? Check your spam folder or try again.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setEmail('');
                            }}
                            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200 hover:underline"
                        >
                            Try again
                        </button>
                    </div>

                    {/* Back to Login */}
                    <div className="text-center pt-6 border-t border-gray-100">
                        <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200 hover:underline">
                            ← Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 w-full max-w-md p-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🔑</span>
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">Forgot Password</h2>
                    <p className="text-gray-600 text-sm">
                        Enter your email address and we'll send you a link to reset your password
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all duration-200 hover:border-gray-300 text-gray-900"
                            required
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                            </div>
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>
                </form>

                {/* Help Text */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm text-center">
                        💡 <strong>Tip:</strong> Make sure to check your spam folder if you don't see the email in your inbox.
                    </p>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-600 text-sm mb-3">
                        Remember your password?
                    </p>
                    <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200 hover:underline">
                        Sign in here
                    </Link>
                </div>
            </div>
        </div>
    );
}
