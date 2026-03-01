#!/usr/bin/env node

/**
 * Script para otimizar imagens do projeto WebBotss
 * Reduz o tamanho das imagens mantendo a qualidade
 */

const fs = require('fs');
const path = require('path');

// Lista de imagens que precisam ser otimizadas
const imagesToOptimize = [
  {
    name: 'AutomacaoInteligente.png',
    currentSize: '17.9 MB',
    targetSize: '< 500 KB',
    priority: 'HIGH'
  },
  {
    name: 'automação.png', 
    currentSize: '3.0 MB',
    targetSize: '< 200 KB',
    priority: 'HIGH'
  },
  {
    name: 'Analiticz.png',
    currentSize: '1.7 MB', 
    targetSize: '< 150 KB',
    priority: 'MEDIUM'
  },
  {
    name: 'Globalizado.png',
    currentSize: '1.9 MB',
    targetSize: '< 150 KB', 
    priority: 'MEDIUM'
  },
  {
    name: 'Segurança.png',
    currentSize: '1.3 MB',
    targetSize: '< 150 KB',
    priority: 'MEDIUM'
  }
];

