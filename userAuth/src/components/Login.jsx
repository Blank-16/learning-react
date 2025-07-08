import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
        // Add your login logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-purple-900 flex items-center justify-center p-5 relative overflow-hidden">
            {/* Starry background effect */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[10%] left-[10%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-[20%] left-[80%] w-1 h-1 bg-rose-300 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-[30%] left-[30%] w-0.5 h-0.5 bg-pink-200 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-[60%] left-[20%] w-0.5 h-0.5 bg-rose-200 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-[70%] left-[90%] w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-200"></div>
                <div className="absolute top-[80%] left-[40%] w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-900"></div>
                <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-rose-300 rounded-full animate-pulse delay-600"></div>
                <div className="absolute top-[50%] left-[5%] w-0.5 h-0.5 bg-pink-200 rounded-full animate-pulse delay-400"></div>
                <div className="absolute top-[90%] left-[75%] w-1 h-1 bg-white rounded-full animate-pulse delay-800"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl grid md:grid-cols-2 max-w-4xl w-full min-h-[600px] overflow-hidden relative z-10">

                {/* Left Column - Branding */}                <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 flex items-center justify-center p-12 text-white relative overflow-hidden">
                    {/* Subtle star pattern on left panel */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-[15%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute top-[25%] left-[80%] w-0.5 h-0.5 bg-rose-200 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
                        <div className="absolute top-[80%] left-[70%] w-0.5 h-0.5 bg-rose-200 rounded-full animate-pulse delay-500"></div>
                    </div>

                    <div className="text-center relative z-10">
                        <div className="text-6xl mb-6 animate-bounce">⭐</div>
                        <h1 className="text-3xl font-bold mb-4 leading-tight">Welcome Back!</h1>
                        <p className="text-rose-100 text-base leading-relaxed max-w-xs">
                            Sign in to continue to your account and access all features.
                        </p>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="flex items-center justify-center p-12 bg-white">
                    <div className="w-full max-w-sm">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="text-3xl mb-4">🔒</div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
                            <p className="text-gray-600 text-sm">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-6"></div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-800 bg-white focus:border-rose-400 hover:border-pink-300 transition-colors duration-200 outline-none placeholder-gray-400"
                                    required
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-800 bg-white focus:border-rose-400 hover:border-pink-300 transition-colors duration-200 outline-none placeholder-gray-400"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-colors duration-200 shadow-lg mt-2"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* OR Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <span className="px-4 text-gray-500 text-sm font-medium">or</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        </div>

                        {/* Google Sign-In Button */}
                        <button
                            type="button"
                            onClick={() => console.log('Google Sign-In clicked')}
                            className="w-full flex items-center justify-center gap-3 py-3 px-6 border-2 border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-rose-300 transition-all duration-200 font-medium shadow-sm"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>

                        {/* Footer */}
                        <div className="text-center mt-8 pt-6 border-t border-gray-100">
                            <p className="text-gray-600 text-sm mb-2">
                                Don't have an account?
                            </p>
                            <Link to="/register" className="text-rose-600 hover:text-rose-700 font-medium transition-colors duration-200 hover:underline">
                                Sign up here
                            </Link>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right mt-2">
                            <Link to="/forgot-password" className="text-rose-600 hover:text-rose-700 text-sm transition-colors duration-200 hover:underline">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
