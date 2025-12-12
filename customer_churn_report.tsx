import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingDown, AlertCircle, DollarSign } from 'lucide-react';

export default function ChurnReport() {
  const [selectedView, setSelectedView] = useState('overview');

  // Customer data (7 customers as requested)
  const customers = [
    { id: 1, name: 'Sarah Johnson', age: 34, gender: 'Female', tenure: 24, monthlyCharges: 89.50, totalCharges: 2148, contractType: 'Month-to-Month', churnStatus: 'Churned', churnReason: 'Competitor offer' },
    { id: 2, name: 'Michael Chen', age: 28, gender: 'Male', tenure: 12, monthlyCharges: 65.20, totalCharges: 782, contractType: 'Month-to-Month', churnStatus: 'Churned', churnReason: 'Price too high' },
    { id: 3, name: 'Emily Rodriguez', age: 45, gender: 'Female', tenure: 36, monthlyCharges: 105.30, totalCharges: 3791, contractType: 'Two Year', churnStatus: 'Active', churnReason: '-' },
    { id: 4, name: 'James Williams', age: 52, gender: 'Male', tenure: 48, monthlyCharges: 95.75, totalCharges: 4596, contractType: 'Two Year', churnStatus: 'Active', churnReason: '-' },
    { id: 5, name: 'Aisha Patel', age: 31, gender: 'Female', tenure: 8, monthlyCharges: 72.40, totalCharges: 579, contractType: 'Month-to-Month', churnStatus: 'Churned', churnReason: 'Poor service quality' },
    { id: 6, name: 'David Martinez', age: 39, gender: 'Male', tenure: 18, monthlyCharges: 88.90, totalCharges: 1600, contractType: 'One Year', churnStatus: 'Active', churnReason: '-' },
    { id: 7, name: 'Lisa Thompson', age: 42, gender: 'Female', tenure: 6, monthlyCharges: 79.85, totalCharges: 479, contractType: 'Month-to-Month', churnStatus: 'Churned', churnReason: 'Relocation' }
  ];

  // Churn by Gender
  const genderChurnData = [
    { gender: 'Male', churned: 1, active: 2, total: 3 },
    { gender: 'Female', churned: 3, active: 1, total: 4 }
  ];

  // Pie chart data
  const churnPieData = [
    { name: 'Churned', value: 4, color: '#ef4444' },
    { name: 'Active', value: 3, color: '#22c55e' }
  ];

  // Age distribution
  const ageDistribution = [
    { ageGroup: '25-30', churned: 1, active: 0 },
    { ageGroup: '31-40', churned: 2, active: 1 },
    { ageGroup: '41-50', churned: 1, active: 1 },
    { ageGroup: '51-60', churned: 0, active: 1 }
  ];

  // Churn prediction over tenure
  const tenurePrediction = [
    { month: 0, maleChurnRate: 15, femaleChurnRate: 18 },
    { month: 6, maleChurnRate: 22, femaleChurnRate: 28 },
    { month: 12, maleChurnRate: 28, femaleChurnRate: 35 },
    { month: 18, maleChurnRate: 25, femaleChurnRate: 30 },
    { month: 24, maleChurnRate: 20, femaleChurnRate: 25 },
    { month: 36, maleChurnRate: 12, femaleChurnRate: 15 },
    { month: 48, maleChurnRate: 8, femaleChurnRate: 10 }
  ];

  const stats = [
    { label: 'Total Customers', value: '7', icon: Users, color: 'blue' },
    { label: 'Churned', value: '4', icon: TrendingDown, color: 'red' },
    { label: 'Churn Rate', value: '57.1%', icon: AlertCircle, color: 'orange' },
    { label: 'Avg Monthly Charge', value: '$85.27', icon: DollarSign, color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Churn Analysis Report</h1>
          <p className="text-gray-600">Comprehensive analysis of customer retention and churn patterns</p>
          <div className="mt-4 flex gap-4 text-sm">
            <span className="text-gray-600"><strong>Report Date:</strong> December 2024</span>
            <span className="text-gray-600"><strong>Sample Size:</strong> 7 Customers</span>
            <span className="text-gray-600"><strong>Analysis Period:</strong> 6-48 Months</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm font-medium">{stat.label}</span>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedView('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedView === 'overview' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Customer Details
            </button>
            <button
              onClick={() => setSelectedView('analysis')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedView === 'analysis' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Visual Analysis
            </button>
          </div>
        </div>

        {selectedView === 'overview' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Age</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gender</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tenure (Mo)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Charge</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Charges</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contract</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Churn Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.id}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{customer.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.age}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.gender}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.tenure}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">${customer.monthlyCharges}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">${customer.totalCharges}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.contractType}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          customer.churnStatus === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {customer.churnStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{customer.churnReason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedView === 'analysis' && (
          <div className="space-y-6">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Churn Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={churnPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {churnPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart - Gender Churn */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Churn Analysis by Gender</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={genderChurnData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="gender" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="churned" fill="#ef4444" name="Churned" />
                  <Bar dataKey="active" fill="#22c55e" name="Active" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Female Churn Rate</div>
                  <div className="text-2xl font-bold text-red-600">75%</div>
                  <div className="text-xs text-gray-500 mt-1">3 out of 4 churned</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Male Churn Rate</div>
                  <div className="text-2xl font-bold text-blue-600">33.3%</div>
                  <div className="text-xs text-gray-500 mt-1">1 out of 3 churned</div>
                </div>
              </div>
            </div>

            {/* Line Chart - Prediction */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Churn Rate Prediction by Gender Over Tenure</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={tenurePrediction}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Churn Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="maleChurnRate" stroke="#3b82f6" strokeWidth={2} name="Male Churn Rate" />
                  <Line type="monotone" dataKey="femaleChurnRate" stroke="#ec4899" strokeWidth={2} name="Female Churn Rate" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Key Findings:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Female customers show consistently higher churn rates across all tenure periods</li>
                  <li>• Peak churn occurs at 12 months for both genders (critical retention point)</li>
                  <li>• Customers with 36+ months tenure show significantly lower churn risk</li>
                  <li>• Month-to-month contracts correlate with 100% churn in this sample</li>
                </ul>
              </div>
            </div>

            {/* Bar Chart - Age Distribution */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Churn by Age Group</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="churned" fill="#f59e0b" name="Churned" />
                  <Bar dataKey="active" fill="#10b981" name="Active" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recommendations</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Focus on Female Customer Retention</h3>
                    <p className="text-sm text-gray-600 mt-1">Implement targeted retention programs for female customers, especially those on month-to-month contracts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Incentivize Long-term Contracts</h3>
                    <p className="text-sm text-gray-600 mt-1">Offer discounts or benefits for annual/bi-annual contracts to reduce churn from month-to-month plans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Critical 12-Month Intervention</h3>
                    <p className="text-sm text-gray-600 mt-1">Deploy retention campaigns at the 10-11 month mark when churn risk peaks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}