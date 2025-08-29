import React, { useState } from 'react';
import { X, Brain, Target, Mail, Calendar } from 'lucide-react';

interface CreateCampaignModalProps {
  onClose: () => void;
}

export function CreateCampaignModal({ onClose }: CreateCampaignModalProps) {
  const [step, setStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    name: '',
    industry: '',
    companySize: '',
    message: '',
    schedule: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create AI Campaign</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNum ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Target Audience</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                  <input
                    type="text"
                    value={campaignData.name}
                    onChange={(e) => setCampaignData({...campaignData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Q1 SaaS Expansion"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select
                      value={campaignData.industry}
                      onChange={(e) => setCampaignData({...campaignData, industry: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Industry</option>
                      <option value="saas">SaaS</option>
                      <option value="fintech">Fintech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                    <select
                      value={campaignData.companySize}
                      onChange={(e) => setCampaignData({...campaignData, companySize: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Size</option>
                      <option value="startup">1-10 employees</option>
                      <option value="small">11-50 employees</option>
                      <option value="medium">51-200 employees</option>
                      <option value="large">201-1000 employees</option>
                      <option value="enterprise">1000+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">AI Message Generation</h3>
              </div>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-primary-800">
                  Our AI will analyze each prospect's recent activities, company news, and industry trends to create personalized messages that resonate with their specific situation.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message Template (AI will personalize for each prospect)</label>
                <textarea
                  value={campaignData.message}
                  onChange={(e) => setCampaignData({...campaignData, message: e.target.value})}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Hi {{firstName}},

I noticed {{companyName}} recently {{recentActivity}}. This caught my attention because...

Our solution has helped similar {{industry}} companies achieve {{benefit}}. 

Would you be open to a brief conversation about how we could help {{companyName}} {{specificGoal}}?

Best regards,
{{senderName}}"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Schedule & Launch</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={campaignData.schedule}
                    onChange={(e) => setCampaignData({...campaignData, schedule: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Send Rate</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="conservative">Conservative (10/day)</option>
                    <option value="moderate">Moderate (25/day)</option>
                    <option value="aggressive">Aggressive (50/day)</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Campaign Summary</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-600">Name:</span> <span className="font-medium">{campaignData.name || 'Untitled Campaign'}</span></p>
                  <p><span className="text-gray-600">Target:</span> <span className="font-medium">{campaignData.industry || 'All Industries'} companies</span></p>
                  <p><span className="text-gray-600">Size:</span> <span className="font-medium">{campaignData.companySize || 'All sizes'}</span></p>
                  <p><span className="text-gray-600">AI will personalize messages for each prospect based on their recent activities and company profile.</span></p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Step {step} of 3</span>
          </div>
          
          <div className="flex items-center space-x-3">
            {step > 1 && (
              <button
                onClick={handlePrev}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button className="px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors">
                Create Campaign
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}