import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is logged in
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        } else {
            // Redirect to login if not authenticated
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 p-6 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Welcome back, {user.fullName || user.username}!
                            </h1>
                            <p className="text-gray-600 mt-1">
                                You're successfully logged in to your account
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* User Info Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile</h2>
                    <div className="space-y-3">
                        {user.fullName && (
                            <div className="flex items-center gap-3">
                                <span className="text-emerald-600 font-medium">Full Name:</span>
                                <span className="text-gray-700">{user.fullName}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-600 font-medium">Username:</span>
                            <span className="text-gray-700">{user.username}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-600 font-medium">Email:</span>
                            <span className="text-gray-700">{user.email}</span>
                        </div>
                    </div>
                </div>

                {/* Features Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">What you can do:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                            <div className="text-emerald-600 text-lg mb-2">🔐</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Secure Access</h3>
                            <p className="text-gray-600 text-sm">Your account is protected with secure authentication</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-green-600 text-lg mb-2">👤</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Profile Management</h3>
                            <p className="text-gray-600 text-sm">Manage your profile and account settings</p>
                        </div>
                        <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                            <div className="text-teal-600 text-lg mb-2">🔑</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Password Reset</h3>
                            <p className="text-gray-600 text-sm">
                                <Link to="/forgot-password" className="text-teal-600 hover:underline">
                                    Reset your password
                                </Link>
                                {' '}anytime you need to
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="text-blue-600 text-lg mb-2">🚀</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Get Started</h3>
                            <p className="text-gray-600 text-sm">Explore all the features available to you</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 pt-6">
                    <p className="text-gray-600 text-sm">
                        Need help? Contact our support team or visit our help center.
                    </p>
                </div>
            </div>
        </div>
    );
}
