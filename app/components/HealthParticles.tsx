// src/app/components/HealthParticles.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function HealthParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Health-related particles (crosses, hearts, DNA-like shapes)
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      type: string
    }[] = []

    const particleCount = 80

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const types = ['cross', 'heart', 'circle', 'dna']
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.15 + 0.05,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    // Draw medical cross
    const drawCross = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#005ce6'
      ctx.strokeStyle = '#005ce6'
      ctx.lineWidth = 2
      
      const barWidth = size * 0.3
      const barHeight = size * 0.7
      
      // Vertical bar
      ctx.fillRect(x - barWidth / 2, y - barHeight / 2, barWidth, barHeight)
      // Horizontal bar
      ctx.fillRect(x - barHeight / 2, y - barWidth / 2, barHeight, barWidth)
      
      ctx.restore()
    }

    // Draw heart
    const drawHeart = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#ff6b6b'
      ctx.beginPath()
      
      const heartSize = size * 0.8
      ctx.moveTo(x, y + heartSize * 0.3)
      ctx.bezierCurveTo(
        x - heartSize, y - heartSize * 0.5,
        x - heartSize, y + heartSize * 0.5,
        x, y + heartSize
      )
      ctx.bezierCurveTo(
        x + heartSize, y + heartSize * 0.5,
        x + heartSize, y - heartSize * 0.5,
        x, y + heartSize * 0.3
      )
      ctx.fill()
      
      ctx.restore()
    }

    // Draw circle (cell-like)
    const drawCircle = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#1a75ff'
      ctx.beginPath()
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2)
      ctx.fill()
      
      // Inner circle
      ctx.globalAlpha = opacity * 0.5
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(x, y, size * 0.25, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.restore()
    }

    // Draw DNA-like shape (double helix)
    const drawDNA = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = '#4d94ff'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      
      const dnaSize = size * 0.6
      for (let i = -dnaSize; i <= dnaSize; i += 4) {
        const t = (i + dnaSize) / (dnaSize * 2)
        const xOffset = Math.sin(t * Math.PI * 2) * dnaSize * 0.3
        if (i === -dnaSize) {
          ctx.moveTo(x + xOffset, y + i)
        } else {
          ctx.lineTo(x + xOffset, y + i)
        }
      }
      ctx.stroke()
      
      ctx.beginPath()
      for (let i = -dnaSize; i <= dnaSize; i += 4) {
        const t = (i + dnaSize) / (dnaSize * 2)
        const xOffset = -Math.sin(t * Math.PI * 2) * dnaSize * 0.3
        if (i === -dnaSize) {
          ctx.moveTo(x + xOffset, y + i)
        } else {
          ctx.lineTo(x + xOffset, y + i)
        }
      }
      ctx.stroke()
      
      ctx.restore()
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      if (!canvas || !ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height
        
        // Draw based on type
        switch (particle.type) {
          case 'cross':
            drawCross(particle.x, particle.y, particle.size, particle.opacity)
            break
          case 'heart':
            drawHeart(particle.x, particle.y, particle.size, particle.opacity)
            break
          case 'circle':
            drawCircle(particle.x, particle.y, particle.size, particle.opacity)
            break
          case 'dna':
            drawDNA(particle.x, particle.y, particle.size, particle.opacity)
            break
        }
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'black' }}
    />
  )
}