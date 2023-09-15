<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Sport',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'News',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Finance',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        Tag::insert($data);
    }
}
