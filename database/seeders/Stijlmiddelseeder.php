<?php

namespace Database\Seeders;

use App\Models\Stijlmiddel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Stijlmiddelseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stijlmiddelen = [
            [
                'name' => 'Enjambement',
                'color' => '#7209b7'
            ],
            [
                'name' => 'Personificatie',
                'color' => '#f72585',
            ],
            [
                'name' => 'Anticlimax',
                'color' => '#03045e',
            ],
            [
                'name' => 'Alliteratie',
                'color' => '#3a0ca3',
            ],
            [
                'name' => 'Assonantie',
                'color' => '#4361ee',
            ],
            [
                'name' => 'Eufemisme',
                'color' => '#ff5400',
            ],
            [
                'name' => 'Hyperbool',
                'color' => '#f72585',
            ],
            [
                'name' => 'Metafoor',
                'color' => '#014f86',
            ],
            [
                'name' => 'Pleonasme',
                'color' => '#bf0603',
            ],
            [
                'name' => 'Tautologie',
                'color' => '#8ac926',
            ],
            [
                'name' => 'Oxymoron',
                'color' => '#006400',
            ]
        ];

        foreach ($stijlmiddelen as $stijlmiddel) {
            Stijlmiddel::create($stijlmiddel);
        }
    }
}
