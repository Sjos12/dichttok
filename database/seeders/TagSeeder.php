<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            [
                'name' => 'Oorlog',
                'color' => '#7209b7'
            ],
            [
                'name' => 'Comedie',
                'color' => '#f72585',
            ],
            [
                'name' => 'Romantiek',
                'color' => '#03045e',
            ],
            [
                'name' => 'Rouw',
                'color' => '#3a0ca3',
            ],
            [
                'name' => 'Sport',
                'color' => '#4361ee',
            ],
            [
                'name' => 'Haiku',
                'color' => '#ff5400',
            ],
            [
                'name' => 'Limerick',
                'color' => '#f72585',
            ],
            [
                'name' => 'Rap',
                'color' => '#014f86',
            ],
            [
                'name' => 'Sinterklaas',
                'color' => '#bf0603',
            ],
            [
                'name' => 'Valentijn',
                'color' => '#8ac926',
            ],
            [
                'name' => 'Kinderrijm',
                'color' => '#006400',
            ]
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }
    }
}
