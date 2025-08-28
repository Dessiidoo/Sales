// OpenAI service for AI-powered domain analysis
class OpenAIService {
  constructor() {
    this.apiKey = import.meta.env.OPENAI_API_KEY;
    this.baseURL = 'https://api.openai.com/v1';
  }

  async analyzeDomain(domainName, keyword, marketData = {}) {
    if (!this.apiKey) {
      console.warn('OpenAI API key not configured, using fallback analysis');
      return this.fallbackAnalysis(domainName, keyword);
    }

    try {
      const prompt = this.buildAnalysisPrompt(domainName, keyword, marketData);
      
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert domain investor and AI analyst specializing in domain valuation and market trends. Provide accurate, data-driven domain analysis.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 1000,
          temperature: 0.3
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return this.parseAIResponse(data.choices[0].message.content, domainName);
      
    } catch (error) {
      console.error('OpenAI analysis failed:', error);
      return this.fallbackAnalysis(domainName, keyword);
    }
  }

  buildAnalysisPrompt(domainName, keyword, marketData) {
    return `
Analyze the domain "${domainName}" for investment potential. Consider:

DOMAIN: ${domainName}
PRIMARY KEYWORD: ${keyword}
MARKET DATA: ${JSON.stringify(marketData)}

Please provide analysis in this JSON format:
{
  "predictedValue": number (USD),
  "confidence": number (1-100),
  "trendScore": number (1-10),
  "seoValue": number (1-10),
  "reasons": ["reason1", "reason2", "reason3"],
  "riskFactors": ["risk1", "risk2"],
  "timeToSell": "estimate in months",
  "marketTrend": "bullish/bearish/neutral"
}

Consider:
- Keyword search volume and trends
- Domain length and memorability
- Extension value (.com premium)
- Market demand for the niche
- Brandability and commercial potential
- SEO advantages
- Historical sales of similar domains
- Current market conditions

Be realistic but identify genuine opportunities.
    `;
  }

  parseAIResponse(aiResponse, domainName) {
    try {
      // Extract JSON from AI response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const analysis = JSON.parse(jsonMatch[0]);
        
        // Validate and normalize the response
        return {
          name: domainName,
          predictedValue: Math.max(1, analysis.predictedValue || 100),
          confidence: Math.min(100, Math.max(1, analysis.confidence || 75)),
          trendScore: Math.min(10, Math.max(1, analysis.trendScore || 5)),
          seoValue: Math.min(10, Math.max(1, analysis.seoValue || 5)),
          reasons: analysis.reasons?.slice(0, 4) || ['AI analysis', 'Market potential'],
          riskFactors: analysis.riskFactors?.slice(0, 3) || ['Market volatility'],
          timeToSell: analysis.timeToSell || '3-6 months',
          marketTrend: analysis.marketTrend || 'neutral',
          aiPowered: true
        };
      }
    } catch (error) {
      console.error('Failed to parse AI response:', error);
    }
    
    return this.fallbackAnalysis(domainName, 'unknown');
  }

  fallbackAnalysis(domainName, keyword) {
    // Fallback analysis when OpenAI is not available
    const baseValue = Math.floor(Math.random() * 2000) + 500;
    const confidence = Math.floor(Math.random() * 30) + 60;
    
    return {
      name: domainName,
      predictedValue: baseValue,
      confidence: confidence,
      trendScore: Math.floor(Math.random() * 4) + 5,
      seoValue: Math.floor(Math.random() * 4) + 5,
      reasons: ['Keyword relevance', 'Domain structure', 'Market potential'],
      riskFactors: ['Market uncertainty'],
      timeToSell: '3-6 months',
      marketTrend: 'neutral',
      aiPowered: false
    };
  }

  async batchAnalyzeDomains(domains, keyword) {
    const analyses = [];
    
    // Process in batches to avoid rate limits
    const batchSize = 3;
    for (let i = 0; i < domains.length; i += batchSize) {
      const batch = domains.slice(i, i + batchSize);
      const batchPromises = batch.map(domain => 
        this.analyzeDomain(domain, keyword)
      );
      
      const batchResults = await Promise.all(batchPromises);
      analyses.push(...batchResults);
      
      // Small delay between batches
      if (i + batchSize < domains.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return analyses;
  }
}

export const openaiService = new OpenAIService();